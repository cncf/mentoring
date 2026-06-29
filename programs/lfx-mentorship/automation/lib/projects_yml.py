"""Render the auto-generated projects.yml for the landscape sync workflow.

Pure, dependency-free helper so the date-handling logic is unit-testable
outside the inline-Python workflow that calls it.

The header carries a "Last updated" date. Because the landscape sync runs on a
schedule, writing today's date on every run produces a one-line diff (and a
spurious PR) even when the project list is unchanged. `render` preserves the
prior date when only that line would change, so the date moves only when the
project list (or its count) actually changes.
"""

import re

_DATE_LINE = re.compile(r"^# Last updated: .*$", re.MULTILINE)


def _header(total, date_str):
    return (
        "# Auto-generated from cncf/landscape — DO NOT EDIT MANUALLY.\n"
        f"# Last updated: {date_str}\n"
        f"# Total projects: {total}\n\n"
    )


def _ignore_date(text):
    return _DATE_LINE.sub("# Last updated:", text)


def render(body, total, today, existing=None):
    """Return the projects.yml content to write.

    body:     the YAML-dumped project list (no header).
    total:    project count for the header.
    today:    ISO date string to use when the content actually changed.
    existing: current file content on disk, or None if the file is absent.
    """
    new_content = _header(total, today) + body
    if existing is not None and _ignore_date(existing) == _ignore_date(new_content):
        # Only the date would change, so keep the file byte-identical: the
        # sync then produces no diff and no spurious PR.
        return existing
    return new_content
