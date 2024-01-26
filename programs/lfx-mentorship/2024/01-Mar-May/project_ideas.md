## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### WasmEdge

#### Integrate MLX as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. And we want to bring more. [MLX](https://github.com/ml-explore/mlx) is an array framework on Apple silicon created by Apple machine learning research. With MLX, we believe it can have a huge improvement on macOS.
- Expected Outcome: A new plugin provides a MLX [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3168
- LFX URL: 

#### Integrate Intel Extension for Transformers as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. Running LLM with CPU only is huge for those users who don't have GPU. We would like to integrate [Intel Extension for Transformers](https://github.com/intel/intel-extension-for-transformers) as a new WASI-NN backend to provide a faster CPU inference performance.
- Expected Outcome: A new plugin provides a Intel Extension for Transformers [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3169
- LFX URL: 

#### Integrate whisper.cpp as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. Dealing with the Voice to Text is a big thing that we want to achieve. To make it possible, we would like to integrate [whisper.cpp](https://github.com/ggerganov/whisper.cpp), a port of OpenAI's Whisper model in C/C++ as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a whisper.cpp [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3170
- LFX URL: 

#### Integrate burn.rs as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. [Burn.rs](https://github.com/tracel-ai/burn) is a new deep learning framework built using Rust. The portability, flexibility, and compute efficiency are important to Wasm. That's why we would love to have `burn.rs` as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a burn.rs [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: Rust, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3172
- LFX URL: 

