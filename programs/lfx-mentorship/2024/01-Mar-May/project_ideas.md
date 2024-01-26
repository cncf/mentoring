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

### Vitess

#### Improve Unit Test Coverage

- Description: Vitess is a scalable cloud-native database system for horizontal scaling of MySQL.The project is over 10 years old and there are parts of the code that don’t have very good unit test coverage. Revamping these code files and adding unit test coverage will help with the overall project health. Having strong unit testing is also useful in preventing introducing bugs when making code changes to these files. The task of the mentee would be to add said unit tests for the given code files. At the time of writing this proposal, the unit test coverage in Vitess stands at 47.3% of all lines of code.
- Expected Outcome: Improved unit test coverage in Vitess.
- Recommended Skills: Go, SQL, Unit testing
- Mentor(s): 
  - [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
  - [Harshit Gangal](https://github.com/harshit-gangal) (harshit@planetscale.com)
- Issue: https://github.com/vitessio/vitess/issues/14931
- LFX URL: 

### Volcano

#### Volcano supports multi-cluster AI workloads scheduling

- Description: Volcano provides rich scheduling capabilities for AI workloads in the field of single cluster. In large model training scenarios, a single cluster cannot meet the computing power requirements of jobs, more and more users hope to submit jobs uniformly on multiple clusters for large model training, volcano needs to provide various scheduling capabilities, such as job management, gang scheduling, queue management, etc., and select the appropriate cluster for jobs to cope with the requirements of large model training.
- Expected Outcome:
  - Implement a basic multi-clusters scheduling framework integrated with multi-clusters scheduler like [Karmada](https://github.com/karmada-io/karmada) or other multi-cluster orchestration.
  - Implement gang scheduling, fair scheduling in multi-cluster.
  - Implement queue management in multi-cluster.
- Recommended Skills: Go, Kubernetes, Volcano
- Mentor(s):
  -   william wang(@william-wang, wang.platform@gmail.com)
  -   Xuzheng Chang(@Monokaix, changxuzheng@huawei.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3310
- LFX URL: 

#### Volcano supports DRA integration

- Description:  [DRA](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/) is a new generation device management mechanism for kubernetes. It introduces a new resource request API `ResourceClaim`, which requires kubelet, kube-controller-manager, scheduler, and third-party device management controllers to cooperate with each other to work. The kube-scheduler has implemented corresponding scheduling capabilities, Volcano also needs to implement the DRA scheduling plug-in to integrate the DRA function.
- Expected Outcome:
  - A design document describing how to integrate DRA into volcano.
  - Implement DRA plugin in volcano.
- Recommended Skills: Go, Kubernetes, Volcano
- Mentor(s):
  -   william wang(@william-wang, wang.platform@gmail.com)
  -   Xuzheng Chang(@Monokaix, changxuzheng@huawei.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3143
- LFX URL: 

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

