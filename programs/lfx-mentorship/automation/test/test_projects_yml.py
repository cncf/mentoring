"""Unit tests for the projects.yml render helper used by the
landscape-projects-sync workflow.

Run from programs/lfx-mentorship/automation:
    python3 -m unittest discover -s test -p 'test_*.py'
"""

import os
import sys
import unittest

sys.path.insert(
    0, os.path.join(os.path.dirname(__file__), "..", "lib")
)

from projects_yml import render  # noqa: E402

BODY = (
    "- name: Aeraki Mesh\n"
    "  slug: aerakimesh\n"
    "  maturity: sandbox\n"
)


class RenderProjectsYmlTest(unittest.TestCase):
    def test_first_write_uses_today(self):
        out = render(BODY, total=1, today="2026-06-29", existing=None)
        self.assertIn("# Last updated: 2026-06-29\n", out)
        self.assertIn("# Total projects: 1\n", out)
        self.assertTrue(out.endswith(BODY))

    def test_body_unchanged_preserves_old_date(self):
        existing = render(BODY, total=1, today="2026-06-25", existing=None)
        out = render(BODY, total=1, today="2026-06-29", existing=existing)
        # Nothing but the date would change, so keep the file byte-identical
        # (old date, no diff, no spurious PR).
        self.assertEqual(out, existing)
        self.assertIn("# Last updated: 2026-06-25\n", out)

    def test_body_changed_bumps_date(self):
        existing = render(BODY, total=1, today="2026-06-25", existing=None)
        new_body = BODY + (
            "- name: Argo\n"
            "  slug: argo\n"
            "  maturity: graduated\n"
        )
        out = render(new_body, total=2, today="2026-06-29", existing=existing)
        self.assertIn("# Last updated: 2026-06-29\n", out)
        self.assertIn("# Total projects: 2\n", out)
        self.assertTrue(out.endswith(new_body))

    def test_count_change_alone_bumps_date(self):
        # The total-projects line is meaningful content, not ignored like the
        # date line: a count change must bump the date.
        existing = render(BODY, total=1, today="2026-06-25", existing=None)
        out = render(BODY, total=99, today="2026-06-29", existing=existing)
        self.assertIn("# Last updated: 2026-06-29\n", out)
        self.assertIn("# Total projects: 99\n", out)


if __name__ == "__main__":
    unittest.main()
