# Third-Party Notices

FakeBank is licensed under Apache-2.0. Third-party components retain their own
copyrights and license terms. This file covers the application dependency versions
and local base-image inventory reviewed for the 0.2.0 candidate on November 17, 2026.
It is not a claim that GHCR images have been published. A changed dependency or base
image requires an updated inventory and review.

## Application components

The API image includes the API components below; the Checkout image includes the
bundled React components below. Shared notice text is reproduced once with the
applicable component names. Upstream notices already present in dependencies and
base images must also be retained. These licenses do not relicense FakeBank.

| Artifact | Component | Version | License |
|---|---|---|---|
| API | @esbuild/linux-x64 | 0.28.1 | MIT |
| API | @fastify/ajv-compiler | 4.0.5 | MIT |
| API | @fastify/error | 4.2.0 | MIT |
| API | @fastify/fast-json-stringify-compiler | 5.1.0 | MIT |
| API | @fastify/forwarded | 3.0.1 | MIT |
| API | @fastify/merge-json-schemas | 0.2.1 | MIT |
| API | @fastify/proxy-addr | 5.1.0 | MIT |
| API | @pinojs/redact | 0.4.0 | MIT |
| API | abstract-logging | 2.0.1 | MIT |
| API | ajv-formats | 3.0.1 | MIT |
| API | ajv | 8.20.0 | MIT |
| API | atomic-sleep | 1.0.0 | MIT |
| API | avvio | 9.2.0 | MIT |
| API | cookie | 1.1.1 | MIT |
| API | dequal | 2.0.3 | MIT |
| API | esbuild | 0.28.1 | MIT |
| API | fast-decode-uri-component | 1.0.1 | MIT |
| API | fast-deep-equal | 3.1.3 | MIT |
| API | fast-json-stringify | 7.0.0 | MIT |
| API | fast-querystring | 1.1.2 | MIT |
| API | fast-uri | 3.1.3 | BSD-3-Clause |
| API | fastify | 5.10.0 | MIT |
| API | fastq | 1.20.1 | ISC |
| API | find-my-way | 9.6.0 | MIT |
| API | ipaddr.js | 2.4.0 | MIT |
| API | json-schema-ref-resolver | 3.0.0 | MIT |
| API | json-schema-traverse | 1.0.0 | MIT |
| API | light-my-request | 6.6.0 | BSD-3-Clause |
| API | on-exit-leak-free | 2.1.2 | MIT |
| API | pg-cloudflare | 1.4.0 | MIT |
| API | pg-connection-string | 2.14.0 | MIT |
| API | pg-int8 | 1.0.1 | ISC |
| API | pg-pool | 3.14.0 | MIT |
| API | pg-protocol | 1.15.0 | MIT |
| API | pg-types | 2.2.0 | MIT |
| API | pg | 8.22.0 | MIT |
| API | pgpass | 1.0.5 | MIT |
| API | pino-abstract-transport | 3.0.0 | MIT |
| API | pino-std-serializers | 7.1.0 | MIT |
| API | pino | 10.3.1 | MIT |
| API | postgres-array | 2.0.0 | MIT |
| API | postgres-bytea | 1.0.1 | MIT |
| API | postgres-date | 1.0.7 | MIT |
| API | postgres-interval | 1.2.0 | MIT |
| API | process-warning | 4.0.1 | MIT |
| API | process-warning | 5.0.0 | MIT |
| API | quick-format-unescaped | 4.0.4 | MIT |
| API | real-require | 0.2.0 | MIT |
| API | real-require | 1.0.0 | MIT |
| API | require-from-string | 2.0.2 | MIT |
| API | ret | 0.5.0 | MIT |
| API | reusify | 1.1.0 | MIT |
| API | rfdc | 1.4.1 | MIT |
| API | safe-regex2 | 5.1.1 | MIT |
| API | safe-stable-stringify | 2.5.0 | MIT |
| API | secure-json-parse | 4.1.0 | BSD-3-Clause |
| API | semver | 7.8.5 | ISC |
| API | set-cookie-parser | 2.7.2 | MIT |
| API | sonic-boom | 4.2.1 | MIT |
| API | split2 | 4.2.0 | ISC |
| API | thread-stream | 4.2.0 | MIT |
| API | toad-cache | 3.7.4 | MIT |
| API | tsx | 4.23.0 | MIT |
| API | xtend | 4.0.2 | MIT |
| Checkout | react | 19.2.7 | MIT |
| Checkout | react-dom | 19.2.7 | MIT |
| Checkout | scheduler | 0.27.0 | MIT |

`abstract-logging` 2.0.1 links from its versioned README to the author's MIT license:
https://github.com/jsumners/abstract-logging/blob/v2.0.1/Readme.md and
https://jsumners.mit-license.org/ (retrieved November 17, 2026). Its author-maintained
notice is reproduced below. The esbuild license also covers its linux-x64 binary.

## Application license texts

### @esbuild/linux-x64 0.28.1, esbuild 0.28.1

```text
MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/ajv-compiler 4.0.5

```text
MIT License

Copyright (c) 2022-present The Fastify team

The Fastify team members are listed at https://github.com/fastify/fastify#team.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/error 4.2.0

```text
MIT License

Copyright (c) 2020 Fastify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/fast-json-stringify-compiler 5.1.0

```text
MIT License

Copyright (c) 2022-present The Fastify team <https://github.com/fastify/fastify#team>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/forwarded 3.0.1

```text
MIT License

Copyright (c) 2014-2017 Douglas Christopher Wilson
Copyright (c) 2021-present The Fastify team

The Fastify team members are listed at https://github.com/fastify/fastify#team.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/merge-json-schemas 0.2.1

```text
MIT License

Copyright (c) 2024 Fastify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @fastify/proxy-addr 5.1.0

```text
MIT License

Copyright (c) 2014-2016 Douglas Christopher Wilson
Copyright (c) 2021-present The Fastify team

The Fastify team members are listed at https://github.com/fastify/fastify#team.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### @pinojs/redact 0.4.0

```text
MIT License

Copyright (c) 2025 pinojs contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### abstract-logging 2.0.1

```text
The MIT License (MIT)

    

Copyright © 2026 James Sumners

    

Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the “Software”), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

    

The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.

    

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.
```

### ajv-formats 3.0.1

```text
MIT License

Copyright (c) 2020 Evgeny Poberezkin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### ajv 8.20.0

```text
The MIT License (MIT)

Copyright (c) 2015-2021 Evgeny Poberezkin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### atomic-sleep 1.0.0

```text
The MIT License (MIT)
Copyright (c) 2020 David Mark Clements


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
```

### avvio 9.2.0

```text
MIT License

Copyright (c) 2016-2020 Matteo Collina
Copyright (c) 2020-present The Fastify team

The Fastify team members are listed at https://github.com/fastify/fastify#team.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### cookie 1.1.1

```text
(The MIT License)

Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com>
Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### dequal 2.0.3

```text
The MIT License (MIT)

Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### fast-decode-uri-component 1.0.1

```text
MIT License

Copyright (c) 2018 Tomas Della Vedova
Copyright (c) 2017 Justin Ridgewell
Copyright (c) 2008-2009 Bjoern Hoehrmann <bjoern@hoehrmann.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### fast-deep-equal 3.1.3, json-schema-traverse 1.0.0

```text
MIT License

Copyright (c) 2017 Evgeny Poberezkin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### fast-json-stringify 7.0.0

```text
MIT License

Copyright (c) 2016-present Matteo Collina
Copyright (c) 2016-present The Fastify team <https://github.com/fastify/fastify#team>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### fast-querystring 1.1.2

```text
Copyright (c) 2022 Yagiz Nizipli

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

### fast-uri 3.1.3

```text
Copyright (c) 2011-2021, Gary Court until https://github.com/garycourt/uri-js/commit/a1acf730b4bba3f1097c9f52e7d9d3aba8cdcaae
Copyright (c) 2021-present The Fastify team <https://github.com/fastify/fastify#team>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * The names of any contributors may not be used to endorse or promote
      products derived from this software without specific prior written
      permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS AND CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

                                  *   *   *

The complete list of contributors can be found at:
- https://github.com/garycourt/uri-js/graphs/contributors
```

### fastify 5.10.0

```text
MIT License

Copyright (c) 2016-present The Fastify team <https://github.com/fastify/fastify#team>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### fastq 1.20.1

```text
Copyright (c) 2015-2020, Matteo Collina <matteo.collina@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

### find-my-way 9.6.0

```text
MIT License

Copyright (c) 2017-2019 Tomas Della Vedova

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### ipaddr.js 2.4.0

```text
Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### json-schema-ref-resolver 3.0.0

```text
MIT License

Copyright (c) 2023 Fastify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### light-my-request 6.6.0

```text
Copyright (c) 2017 The Fastify Team
Copyright (c) 2012-2017, Project contributors
Copyright (c) 2012-2014, Walmart
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * The names of any contributors may not be used to endorse or promote
      products derived from this software without specific prior written
      permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS AND CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

                                  *   *   *

The complete list of contributors can be found at:
- https://github.com/hapijs/shot/graphs/contributors
- https://github.com/fastify/light-my-request/graphs/contributors
```

### on-exit-leak-free 2.1.2, thread-stream 4.2.0

```text
MIT License

Copyright (c) 2021 Matteo Collina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### pg-cloudflare 1.4.0, pg-protocol 1.15.0, pg 8.22.0

```text
MIT License

Copyright (c) 2010 - 2021 Brian Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### pg-connection-string 2.14.0

```text
The MIT License (MIT)

Copyright (c) 2014 Iced Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### pg-int8 1.0.1

```text
Copyright © 2017, Charmander <~@charmander.me>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```

### pg-pool 3.14.0

```text
MIT License

Copyright (c) 2017 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### pg-types 2.2.0

```text
Copyright (c) 2014 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### pgpass 1.0.5

```text
Copyright (c) 2013-2016 Hannes Hörl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### pino-abstract-transport 3.0.0

```text
MIT License

Copyright (c) 2021 pino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### pino-std-serializers 7.1.0

```text
Copyright Mateo Collina, David Mark Clements, James Sumners

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### pino 10.3.1

```text
The MIT License (MIT)

Copyright (c) 2016-2025 Matteo Collina, David Mark Clements and the Pino contributors listed at <https://github.com/pinojs/pino#the-team> and in the README file.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### postgres-array 2.0.0, postgres-bytea 1.0.1, postgres-date 1.0.7, postgres-interval 1.2.0

```text
The MIT License (MIT)

Copyright (c) Ben Drucker <bvdrucker@gmail.com> (bendrucker.me)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### process-warning 4.0.1, process-warning 5.0.0

```text
MIT License

Copyright (c) Fastify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### quick-format-unescaped 4.0.4

```text
The MIT License (MIT)

Copyright (c) 2016-2019 David Mark Clements

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### real-require 0.2.0, real-require 1.0.0

```text
The MIT License (MIT)

Copyright (c) 2021 Paolo Insogna and the real-require contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### require-from-string 2.0.2

```text
The MIT License (MIT)

Copyright (c) Vsevolod Strukchinsky <floatdrop@gmail.com> (github.com/floatdrop)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### ret 0.5.0

```text
MIT License

Copyright (C) 2011 by fent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### reusify 1.1.0

```text
The MIT License (MIT)

Copyright (c) 2015-2024 Matteo Collina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### rfdc 1.4.1

```text
Copyright 2019 "David Mark Clements <david.mark.clements@gmail.com>"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
```

### safe-regex2 5.1.1

```text
MIT License

Copyright (c) 2019-present The Fastify team <https://github.com/fastify/fastify#team>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### safe-stable-stringify 2.5.0

```text
The MIT License (MIT)

Copyright (c) Ruben Bridgewater

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### secure-json-parse 4.1.0

```text
Copyright (c) 2019, Sideway Inc, and project contributors
Copyright (c) 2019-present The Fastify team
All rights reserved.

The Fastify team members are listed at https://github.com/fastify/fastify#team.

The complete list of contributors can be found at:
- https://github.com/hapijs/bourne/graphs/contributors
- https://github.com/fastify/secure-json-parse/graphs/contributors

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

### semver 7.8.5

```text
The ISC License

Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

### set-cookie-parser 2.7.2

```text
The MIT License (MIT)

Copyright (c) 2015 Nathan Friedly <nathan@nfriedly.com> (http://nfriedly.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### sonic-boom 4.2.1

```text
MIT License

Copyright (c) 2017 Matteo Collina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### split2 4.2.0

```text
Copyright (c) 2014-2018, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

### toad-cache 3.7.4

```text
MIT License

Copyright (c) 2023 Igor Savin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### tsx 4.23.0

```text
MIT License

Copyright (c) Hiroki Osame <hiroki.osame@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### xtend 4.0.2

```text
The MIT License (MIT)
Copyright (c) 2012-2014 Raynos.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### react 19.2.7, react-dom 19.2.7, scheduler 0.27.0

```text
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Base images and runtime tooling

[Base license texts](licenses/BASE_LICENSES.txt) includes the GPL/LGPL/MPL texts
for applicable base components. Existing component-specific notices are retained.

Base images are not licensed as a whole under FakeBank's Apache-2.0 license.
The following inventory is derived from the exact locally inspected image artifacts,
not from the current contents of a floating registry tag. Local image IDs below are
not registry manifest digests. Final publication must record the verified registry
identities and repeat this inventory if any base changes.

The API preserves Node's combined third-party notices at `/usr/local/LICENSE`,
npm's notices at `/usr/local/lib/node_modules/npm/LICENSE`, Corepack's
`/usr/local/lib/node_modules/corepack/LICENSE.md`, Yarn's `/opt/yarn-v1.22.22/LICENSE`
and pnpm 11.0.9's `/corepack/v1/pnpm/11.0.9/LICENSE` plus its bundled dependency
license files. Checkout preserves nginx and module copyright files under
`/usr/share/licenses/`. Their presence must be checked in final images.

Alpine package license expressions below are package-manager metadata, not a
substitute for full license texts, copyright notices or corresponding source.
Do not remove inherited notices. Before public redistribution of derived images,
review applicable GPL/LGPL/MPL source obligations for the exact packaged versions
and provide the required corresponding-source materials or compliant source offer.
Upstream image availability or an SPDX table alone does not establish compliance.
That source-fulfilment gate remains open; no source offer is made by this document.

The separately pulled PostgreSQL image is not embedded in the FakeBank application
images. Its exact 17.10 upstream copyright/license is reproduced below for the
reviewed Compose dependency; source: https://github.com/postgres/postgres/blob/REL_17_10/COPYRIGHT.

### API base: node:24-alpine

Local image ID: `sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5`.

| Alpine component | Version | Declared license | Source recipe origin |
|---|---|---|---|
| alpine-baselayout | 3.7.2-r1 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/60a7585bbab2fa0f762504eb617dbca90216e31f)) |
| alpine-baselayout-data | 3.7.2-r1 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/60a7585bbab2fa0f762504eb617dbca90216e31f)) |
| alpine-keys | 2.6-r0 | MIT | alpine-keys ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/b9f23becced4d7b3ccc0fa0f28530243ccd314a0)) |
| alpine-release | 3.24.4-r0 | MIT | alpine-base ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/105b835acd9971b9770fb61f5a1ddcc133c180dc)) |
| apk-tools | 3.0.9-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/13685e8f2cf1c103cbba2fb9efcfcf19f4918df0)) |
| busybox | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| busybox-binsh | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| ca-certificates-bundle | 20261020-r0 | MPL-2.0 AND MIT | ca-certificates ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/e78f5987166c6ffbe23f6472e2e8f040298fe2da)) |
| libapk | 3.0.9-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/13685e8f2cf1c103cbba2fb9efcfcf19f4918df0)) |
| libatomic | 15.2.0-r5 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/423a8ad043d07f2c7546c8ec3e2b0384cda360ae)) |
| libcrypto3 | 3.5.9-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/29b9ec24b1b5b39aeef51fa2a044210e2ec5258e)) |
| libgcc | 15.2.0-r5 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/423a8ad043d07f2c7546c8ec3e2b0384cda360ae)) |
| libssl3 | 3.5.9-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/29b9ec24b1b5b39aeef51fa2a044210e2ec5258e)) |
| libstdc++ | 15.2.0-r5 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/423a8ad043d07f2c7546c8ec3e2b0384cda360ae)) |
| musl | 1.2.6-r3 | MIT | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8f79d39391b46d6dbf1800fb68b8212a21d5ee2e)) |
| musl-utils | 1.2.6-r3 | MIT AND BSD-2-Clause AND GPL-2.0-or-later | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8f79d39391b46d6dbf1800fb68b8212a21d5ee2e)) |
| scanelf | 1.3.9-r1 | GPL-2.0-only | pax-utils ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c61801eeacb3ffcd9c2025b09e402153bb93fb39)) |
| ssl_client | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| zlib | 1.3.2-r1 | Zlib | zlib ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/0afa2da0e8c8051c6f8f64a7a388e5a259904245)) |

Source recipes: https://gitlab.alpinelinux.org/alpine/aports ; package/source indexes: https://pkgs.alpinelinux.org/ . Exact source-recipe commits are retained with the technical review; these general links are not a corresponding-source offer.

### Checkout base: nginx:1.29-alpine

Local image ID: `sha256:5616878291a2eed594aee8db4dade5878cf7edcb475e59193904b198d9b830de`.

| Alpine component | Version | Declared license | Source recipe origin |
|---|---|---|---|
| alpine-baselayout | 3.7.2-r0 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/15b3b78187b3808104f98f765e9632e0b09281a7)) |
| alpine-baselayout-data | 3.7.2-r0 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/15b3b78187b3808104f98f765e9632e0b09281a7)) |
| alpine-keys | 2.6-r0 | MIT | alpine-keys ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/b9f23becced4d7b3ccc0fa0f28530243ccd314a0)) |
| alpine-release | 3.23.4-r0 | MIT | alpine-base ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/80547603fef905175bab0134ca7bbee7150d1417)) |
| aom-libs | 3.13.1-r1 | BSD-2-Clause AND custom | aom ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/d56317c7cb714f6117d429f8e9fc8338ffb1e127)) |
| apk-tools | 3.0.6-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3812c9da974bef8b28f995490ca8233f1472ccc4)) |
| brotli-libs | 1.2.0-r0 | MIT | brotli ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/e1a74d1bc0c4e0308990de2e9ec9d82529fcac8f)) |
| busybox | 1.37.0-r30 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1e823a60eb85606954b3a5af5f8e5bbd1ea680cf)) |
| busybox-binsh | 1.37.0-r30 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1e823a60eb85606954b3a5af5f8e5bbd1ea680cf)) |
| c-ares | 1.34.6-r0 | MIT | c-ares ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/121b2aa90d4cdc8c976c36291af9ad83d16c20a9)) |
| ca-certificates | 20260413-r0 | MPL-2.0 AND MIT | ca-certificates ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/45fc64457600f914b3c60bc4c02ed99c1b55cadb)) |
| ca-certificates-bundle | 20260413-r0 | MPL-2.0 AND MIT | ca-certificates ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/45fc64457600f914b3c60bc4c02ed99c1b55cadb)) |
| curl | 8.17.0-r1 | curl | curl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/5974f8596ef440c6d8229f293905a3ef5f87c49c)) |
| fontconfig | 2.17.1-r0 | MIT | fontconfig ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/a4cef7ffeb3d7da066e5e50737a9320d1af7d583)) |
| freetype | 2.14.1-r0 | FTL OR GPL-2.0-or-later | freetype ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/021d4507b09a735dfe85e4b4b2b60e90bb5de30a)) |
| geoip | 1.6.12-r6 | LGPL-2.1-or-later | geoip ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/6db81e6559d66572861f28962c24459c4a583da1)) |
| gettext-envsubst | 0.24.1-r1 | GPL-3.0-or-later AND LGPL-2.1-or-later AND MIT | gettext ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c82bd9e35f215c0e39ee43d1aa8c55c230bfbeec)) |
| libapk | 3.0.6-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3812c9da974bef8b28f995490ca8233f1472ccc4)) |
| libavif | 1.3.0-r0 | BSD-2-Clause | libavif ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/23cba16117c09dd58b76272a2a83108ce68a357c)) |
| libbsd | 0.12.2-r0 | BSD-3-Clause | libbsd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/02365e78d654a7beb23fd35d7d69f4a649009ede)) |
| libbz2 | 1.0.8-r6 | bzip2-1.0.6 | bzip2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/33283848034c9885d984c8e8697c645c57324938)) |
| libcrypto3 | 3.5.6-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c630cf83bed943e4e671f1ea54f907d299a958e7)) |
| libcurl | 8.17.0-r1 | curl | curl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/5974f8596ef440c6d8229f293905a3ef5f87c49c)) |
| libdav1d | 1.5.2-r0 | BSD-2-Clause | dav1d ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/0567d6a87dfd9cd8b674749b073cae7cbeef550e)) |
| libedit | 20251016.3.1-r0 | BSD-3-Clause | libedit ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/211d61660b4b7daefe3bb0fff0e99264234c63fe)) |
| libexpat | 2.7.5-r0 | MIT | expat ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/97a106c89c281978af56aab7a2521c3853967ad0)) |
| libgcc | 15.2.0-r2 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/7fa6e7fd3465c5ff89cc33a56d20bf4d59105aaf)) |
| libgd | 2.3.3-r10 | GD | gd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/bf4ebac970366eda6cc26aa61c8dddae0d6916ee)) |
| libice | 1.1.2-r0 | X11 | libice ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/d4941e833167c30aa1172e6d8420d084698254ab)) |
| libidn2 | 2.3.8-r0 | GPL-2.0-or-later OR LGPL-3.0-or-later | libidn2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8240e09aa2fdd8f9979b2016be082273965aff0c)) |
| libintl | 0.24.1-r1 | LGPL-2.1-or-later | gettext ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c82bd9e35f215c0e39ee43d1aa8c55c230bfbeec)) |
| libjpeg-turbo | 3.1.2-r0 | BSD-3-Clause AND IJG AND Zlib | libjpeg-turbo ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/2398baae02b58ff3a036914305607a6c573fba68)) |
| libmd | 1.1.0-r0 | BSD-3-Clause AND BSD-2-Clause AND ISC AND Beerware AND Public Domain | libmd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/73e716067b9edc32c4cc7818cb7d206e57fdde15)) |
| libncursesw | 6.5_p20251123-r0 | X11 | ncurses ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f7479f62dcb52ace52d99650c80de275010ec3ac)) |
| libpng | 1.6.57-r0 | Libpng | libpng ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/cbb6172b49931e0f5cd13073cfa21c6c112dc9e6)) |
| libpsl | 0.21.5-r3 | MIT | libpsl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/6bd45b53fb316dc01bda59f5feaf1e127eb64f22)) |
| libsharpyuv | 1.6.0-r0 | BSD-3-Clause | libwebp ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/af8b48fabd19b69b00f5efe192f461896a38cf74)) |
| libsm | 1.2.6-r0 | MIT | libsm ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/4eaa957537767ad0344894ad0e609068b26bf85d)) |
| libssl3 | 3.5.6-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c630cf83bed943e4e671f1ea54f907d299a958e7)) |
| libstdc++ | 15.2.0-r2 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/7fa6e7fd3465c5ff89cc33a56d20bf4d59105aaf)) |
| libunistring | 1.4.1-r0 | GPL-2.0-or-later OR LGPL-3.0-or-later | libunistring ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/cd5407e1341869af38d836fe83f9dbc98799f43a)) |
| libuuid | 2.41.4-r0 | BSD-3-Clause | util-linux ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/72faf2158c94887ddc5acb476cd0fd33f185253a)) |
| libwebp | 1.6.0-r0 | BSD-3-Clause | libwebp ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/af8b48fabd19b69b00f5efe192f461896a38cf74)) |
| libx11 | 1.8.12-r1 | X11 | libx11 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/052db120ba31c42adbabf71c79f7192b769afc87)) |
| libxau | 1.0.12-r0 | MIT | libxau ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/6bd45b53fb316dc01bda59f5feaf1e127eb64f22)) |
| libxcb | 1.17.0-r1 | MIT | libxcb ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/31f4b3d77ed540ea6a73d15be18002af5552010c)) |
| libxdmcp | 1.1.5-r1 | MIT | libxdmcp ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/614e9166706cec427fc3d907b8d981390a42e088)) |
| libxext | 1.3.6-r2 | MIT | libxext ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/614e9166706cec427fc3d907b8d981390a42e088)) |
| libxml2 | 2.13.9-r0 | MIT | libxml2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/56c3dff2709503e52f64876440272098c07e8adb)) |
| libxpm | 3.5.17-r0 | X11 | libxpm ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1be698a8f385af9d03e946f4ddee9c4c89d4feca)) |
| libxslt | 1.1.43-r3 | X11 | libxslt ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/730f2f5bdc97be98b2beee33f55134c622e6189c)) |
| libxt | 1.3.1-r0 | MIT | libxt ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/60222ebeadec75e483e49194130c6963d0fcbf75)) |
| libyuv | 0.0.1887.20251502-r1 | BSD-3-Clause | libyuv ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c0f43e91e43d9f3bc044680db6e90771107ec0d4)) |
| musl | 1.2.5-r23 | MIT | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8aef0c37b0ad23dc4137f0e4755b97a59dc698b8)) |
| musl-utils | 1.2.5-r23 | MIT AND BSD-2-Clause AND GPL-2.0-or-later | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8aef0c37b0ad23dc4137f0e4755b97a59dc698b8)) |
| ncurses-terminfo-base | 6.5_p20251123-r0 | X11 | ncurses ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f7479f62dcb52ace52d99650c80de275010ec3ac)) |
| nghttp2-libs | 1.68.0-r0 | MIT | nghttp2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/9892659cc676556ac070a7126cb7f59b7e24627f)) |
| nghttp3 | 1.13.1-r0 | MIT | nghttp3 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/94242cb63e58bbace9c1ad76023d7467e5d09e6b)) |
| nginx | 1.29.8-r1 | 2-clause BSD-like license | nginx |
| nginx-module-acme | 1.29.8.0.3.1-r1 | 2-clause BSD-like license | nginx-module-acme |
| nginx-module-geoip | 1.29.8-r1 | 2-clause BSD-like license | nginx-module-geoip |
| nginx-module-image-filter | 1.29.8-r1 | 2-clause BSD-like license | nginx-module-image-filter |
| nginx-module-njs | 1.29.8.0.9.6-r1 | 2-clause BSD-like license | nginx-module-njs |
| nginx-module-xslt | 1.29.8-r1 | 2-clause BSD-like license | nginx-module-xslt |
| pcre2 | 10.47-r0 | BSD-3-Clause | pcre2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/91bb31c9d95cf6addc2fb2454bc484f7d3a27ec7)) |
| scanelf | 1.3.8-r2 | GPL-2.0-only | pax-utils ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3912b4fa83437852312ad3c37a00229ff59fab1c)) |
| ssl_client | 1.37.0-r30 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1e823a60eb85606954b3a5af5f8e5bbd1ea680cf)) |
| tiff | 4.7.1-r0 | libtiff | tiff ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/259914876552dabe6576835e874adc99129b58ae)) |
| tzdata | 2026a-r0 | Public-Domain | tzdata ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/d24914579b7de16dfe3f55c96b51e47b64e91409)) |
| xz-libs | 5.8.2-r0 | GPL-2.0-or-later AND 0BSD AND Public-Domain AND LGPL-2.1-or-later | xz ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/cc9bc015d3f4556c7205d4700e9c76fe7b718e12)) |
| zlib | 1.3.2-r0 | Zlib | zlib ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f8c94d2e1d318ab29eb4ac5f00225341c877ed65)) |
| zstd-libs | 1.5.7-r2 | BSD-3-Clause OR GPL-2.0-or-later | zstd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3c6e2ee2b16f403d53eab39c4426eb61f003c322)) |

Source recipes: https://gitlab.alpinelinux.org/alpine/aports ; package/source indexes: https://pkgs.alpinelinux.org/ . Exact source-recipe commits are retained with the technical review; these general links are not a corresponding-source offer.

### Separate database: postgres:17-alpine

Local image ID: `sha256:dc17045ccfd343b49600570ea734b9c4991cf1c3f3302e67df51e3b402dd55c4`.

| Alpine component | Version | Declared license | Source recipe origin |
|---|---|---|---|
| .postgresql-rundeps | 20260616.230041 |  | None |
| alpine-baselayout | 3.7.2-r1 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/60a7585bbab2fa0f762504eb617dbca90216e31f)) |
| alpine-baselayout-data | 3.7.2-r1 | GPL-2.0-only | alpine-baselayout ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/60a7585bbab2fa0f762504eb617dbca90216e31f)) |
| alpine-keys | 2.6-r0 | MIT | alpine-keys ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/b9f23becced4d7b3ccc0fa0f28530243ccd314a0)) |
| alpine-release | 3.24.1-r0 | MIT | alpine-base ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/0934530484bbcde7498e2c694c710a49616a450e)) |
| apk-tools | 3.0.6-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3812c9da974bef8b28f995490ca8233f1472ccc4)) |
| bash | 5.3.9-r1 | GPL-3.0-or-later | bash ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1522c3193610902d8493f9790a2755c11f21f26d)) |
| busybox | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| busybox-binsh | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| ca-certificates-bundle | 20260611-r0 | MPL-2.0 AND MIT | ca-certificates ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/e41cbd2ae991adfe8df298ba8e8e777e90bd0e03)) |
| gdbm | 1.26-r0 | GPL-3.0-or-later | gdbm ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1ea03990396db618edfcc8a9a0bc6b72662bac8f)) |
| icu-data-full | 78.1-r0 | ICU | icu ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/6755fdb21483ba250d374c3244f0f48bc63447e2)) |
| icu-libs | 78.1-r0 | ICU | icu ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/6755fdb21483ba250d374c3244f0f48bc63447e2)) |
| keyutils-libs | 1.6.3-r4 | GPL-2.0-or-later AND LGPL-2.0-or-later | keyutils ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8bac74716d06c84627ab02d101fd9d2bafd0a34c)) |
| krb5-conf | 1.0-r2 | MIT | krb5-conf ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/4a46b2cb955e25fd6d6f913794d35bc6d876aea9)) |
| krb5-libs | 1.22.2-r1 | MIT | krb5 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/92bc4f0d36aa5307e819fb57167fc19952cf515f)) |
| libapk | 3.0.6-r0 | GPL-2.0-only | apk-tools ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3812c9da974bef8b28f995490ca8233f1472ccc4)) |
| libcom_err | 1.47.4-r0 | GPL-2.0-or-later AND LGPL-2.0-or-later AND BSD-3-Clause AND MIT | e2fsprogs ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8683a6972cb245fbbdb535dad6435a9930bb9374)) |
| libcrypto3 | 3.5.7-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/4a4352d83ab03720965454a8c7b30b1b6a996c84)) |
| libedit | 20260508.3.1-r1 | BSD-3-Clause | libedit ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/7c805161e588c028cdee3f19f500849fb2c75d42)) |
| libffi | 3.5.2-r1 | MIT | libffi ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/2c2a7bb4a8b16066834e90402567b2c19403a790)) |
| libgcc | 15.2.0-r5 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/423a8ad043d07f2c7546c8ec3e2b0384cda360ae)) |
| libldap | 2.6.13-r0 | OLDAP-2.8 | openldap ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8d3de54a95abe163f493e15f0c59d8cfc2ee4abe)) |
| libncursesw | 6.6_p20260516-r0 | X11 | ncurses ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/2cee8a7328d061418336ad327b512d96bcd7bc5e)) |
| libsasl | 2.1.28-r9 | BSD-3-Clause-Attribution AND BSD-4-Clause | cyrus-sasl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/fac808c0fddf93e8980ec1f55972e6f69b78ba6f)) |
| libssl3 | 3.5.7-r0 | Apache-2.0 | openssl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/4a4352d83ab03720965454a8c7b30b1b6a996c84)) |
| libstdc++ | 15.2.0-r5 | GPL-2.0-or-later AND LGPL-2.1-or-later | gcc ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/423a8ad043d07f2c7546c8ec3e2b0384cda360ae)) |
| libuuid | 2.42-r0 | BSD-3-Clause | util-linux ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/5dc62ffe8c6e4ce54619a9f2969a8a5fd713797b)) |
| libverto | 0.3.2-r2 | MIT | libverto ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/84a227baf001b6e0208e3352b294e4d7a40e93de)) |
| libxml2 | 2.13.9-r2 | MIT | libxml2 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f1bd5b6767a0e7fdda380c95138a1c938eb6e102)) |
| libxslt | 1.1.43-r3 | X11 | libxslt ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/730f2f5bdc97be98b2beee33f55134c622e6189c)) |
| llvm21-libs | 21.1.8-r1 | Apache-2.0 | llvm21 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/4b9b094db09064adf09759b02ce63d23ab3d8cbb)) |
| lz4-libs | 1.10.0-r1 | BSD-2-Clause AND GPL-2.0-or-later | lz4 ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/1f16962f34234a77fab0f4651459c4381b4a0cd6)) |
| musl | 1.2.6-r2 | MIT | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f5640d3a10f664c9119720c60515265d3d6f6d01)) |
| musl-utils | 1.2.6-r2 | MIT AND BSD-2-Clause AND GPL-2.0-or-later | musl ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f5640d3a10f664c9119720c60515265d3d6f6d01)) |
| ncurses-terminfo-base | 6.6_p20260516-r0 | X11 | ncurses ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/2cee8a7328d061418336ad327b512d96bcd7bc5e)) |
| nss_wrapper | 1.1.12-r1 | BSD-3-Clause | nss_wrapper ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/44ce39a091100c59a3bd90df6c0312d302be3171)) |
| readline | 8.3.3-r1 | GPL-3.0-or-later | readline ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/a854c03acdac188901fb012f7acbee70a36e8041)) |
| scanelf | 1.3.9-r1 | GPL-2.0-only | pax-utils ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c61801eeacb3ffcd9c2025b09e402153bb93fb39)) |
| ssl_client | 1.37.0-r31 | GPL-2.0-only | busybox ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/c3ef5d10e6ef6528852c51f0564963e2f8c1be19)) |
| tzdata | 2026b-r0 | Public-Domain | tzdata ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/8b83a15ef60f158405dc6c000302b13b990cf7c8)) |
| xz-libs | 5.8.3-r0 | GPL-2.0-or-later AND 0BSD AND Public-Domain AND LGPL-2.1-or-later | xz ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/ce9944f1daadb681dd6f0f81a06e9cce97127377)) |
| zlib | 1.3.2-r0 | Zlib | zlib ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/f8c94d2e1d318ab29eb4ac5f00225341c877ed65)) |
| zstd | 1.5.7-r2 | BSD-3-Clause OR GPL-2.0-or-later | zstd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3c6e2ee2b16f403d53eab39c4426eb61f003c322)) |
| zstd-libs | 1.5.7-r2 | BSD-3-Clause OR GPL-2.0-or-later | zstd ([recipe revision](https://gitlab.alpinelinux.org/alpine/aports/-/tree/3c6e2ee2b16f403d53eab39c4426eb61f003c322)) |

Source recipes: https://gitlab.alpinelinux.org/alpine/aports ; package/source indexes: https://pkgs.alpinelinux.org/ . Exact source-recipe commits are retained with the technical review; these general links are not a corresponding-source offer.

### PostgreSQL 17.10

```text
PostgreSQL Database Management System
(also known as Postgres, formerly known as Postgres95)

Portions Copyright (c) 1996-2026, PostgreSQL Global Development Group

Portions Copyright (c) 1994, The Regents of the University of California

Permission to use, copy, modify, and distribute this software and its
documentation for any purpose, without fee, and without a written agreement
is hereby granted, provided that the above copyright notice and this
paragraph and the following two paragraphs appear in all copies.

IN NO EVENT SHALL THE UNIVERSITY OF CALIFORNIA BE LIABLE TO ANY PARTY FOR
DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING
LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS
DOCUMENTATION, EVEN IF THE UNIVERSITY OF CALIFORNIA HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

THE UNIVERSITY OF CALIFORNIA SPECIFICALLY DISCLAIMS ANY WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE.  THE SOFTWARE PROVIDED HEREUNDER IS
ON AN "AS IS" BASIS, AND THE UNIVERSITY OF CALIFORNIA HAS NO OBLIGATIONS TO
PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
```

## Artifact-specific base notices and source access

- [API base notices](licenses/API_BASE_NOTICES.txt)
- [Checkout base notices](licenses/CHECKOUT_BASE_NOTICES.txt)
- [Matching source companion and recipient access](licenses/SOURCE_AVAILABILITY.txt)
