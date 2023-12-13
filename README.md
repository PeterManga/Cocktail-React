# CocktailReact

CocktailReact is a web application developed in React that allows you to explore and discover cocktail recipes. It uses [TheCocktailDB](https://www.thecocktaildb.com/) API to fetch detailed information about a wide variety of cocktails.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/PeterManga/Cocktail-React.git
2 Navigate to the project directory:
    cd Cocktail-React
    Install dependencies:
    npm install

## Project Tree
    ├───node_modules
│   ├───.bin
│   ├───.vite
│   │   └───deps
│   ├───@aashutoshrathi
│   │   └───word-wrap
│   ├───@ampproject
│   │   └───remapping
│   │       └───dist
│   │           └───types
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───errors
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   ├───transformation
│   │   │   │   │   ├───file
│   │   │   │   │   └───util
│   │   │   │   └───vendor
│   │   │   └───src
│   │   │       └───config
│   │   │           └───files
│   │   ├───generator
│   │   │   └───lib
│   │   │       ├───generators
│   │   │       └───node
│   │   ├───helper-compilation-targets
│   │   │   └───lib
│   │   ├───helper-environment-visitor
│   │   │   └───lib
│   │   ├───helper-function-name
│   │   │   └───lib
│   │   ├───helper-hoist-variables
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-simple-access
│   │   │   └───lib
│   │   ├───helper-split-export-declaration
│   │   │   └───lib
│   │   ├───helper-string-parser
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   ├───lib
│   │   │   └───scripts
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helpers
│   │   │   ├───lib
│   │   │   │   └───helpers
│   │   │   └───scripts
│   │   ├───highlight
│   │   │   └───lib
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-transform-react-jsx-self
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-source
│   │   │   └───lib
│   │   ├───template
│   │   │   └───lib
│   │   ├───traverse
│   │   │   └───lib
│   │   │       ├───path
│   │   │       │   ├───inference
│   │   │       │   └───lib
│   │   │       └───scope
│   │   │           └───lib
│   │   └───types
│   │       └───lib
│   │           ├───asserts
│   │           │   └───generated
│   │           ├───ast-types
│   │           │   └───generated
│   │           ├───builders
│   │           │   ├───flow
│   │           │   ├───generated
│   │           │   ├───react
│   │           │   └───typescript
│   │           ├───clone
│   │           ├───comments
│   │           ├───constants
│   │           │   └───generated
│   │           ├───converters
│   │           ├───definitions
│   │           ├───modifications
│   │           │   ├───flow
│   │           │   └───typescript
│   │           ├───retrievers
│   │           ├───traverse
│   │           ├───utils
│   │           │   └───react
│   │           └───validators
│   │               ├───generated
│   │               └───react
│   ├───@esbuild
│   │   └───win32-x64
│   ├───@eslint
│   │   ├───eslintrc
│   │   │   ├───conf
│   │   │   ├───dist
│   │   │   ├───lib
│   │   │   │   ├───config-array
│   │   │   │   └───shared
│   │   │   └───node_modules
│   │   │       └───globals
│   │   └───js
│   │       └───src
│   │           └───configs
│   ├───@eslint-community
│   │   ├───eslint-utils
│   │   └───regexpp
│   ├───@humanwhocodes
│   │   ├───config-array
│   │   ├───module-importer
│   │   │   ├───dist
│   │   │   └───src
│   │   └───object-schema
│   │       ├───.github
│   │       │   └───workflows
│   │       ├───src
│   │       └───tests
│   ├───@jridgewell
│   │   ├───gen-mapping
│   │   │   └───dist
│   │   │       └───types
│   │   ├───resolve-uri
│   │   │   └───dist
│   │   │       └───types
│   │   ├───set-array
│   │   │   ├───dist
│   │   │   │   └───types
│   │   │   └───src
│   │   ├───sourcemap-codec
│   │   │   └───dist
│   │   │       └───types
│   │   └───trace-mapping
│   │       └───dist
│   │           └───types
│   ├───@nodelib
│   │   ├───fs.scandir
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       ├───types
│   │   │       └───utils
│   │   ├───fs.stat
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       └───types
│   │   └───fs.walk
│   │       └───out
│   │           ├───providers
│   │           ├───readers
│   │           └───types
│   ├───@remix-run
│   │   └───router
│   │       └───dist
│   ├───@rollup
│   │   └───rollup-win32-x64-msvc
│   ├───@types
│   │   ├───babel__core
│   │   ├───babel__generator
│   │   ├───babel__template
│   │   ├───babel__traverse
│   │   ├───prop-types
│   │   ├───react
│   │   │   └───ts5.0
│   │   ├───react-dom
│   │   │   └───test-utils
│   │   └───scheduler
│   ├───@ungap
│   │   └───structured-clone
│   │       ├───.github
│   │       │   └───workflows
│   │       ├───cjs
│   │       └───esm
│   ├───@vitejs
│   │   └───plugin-react
│   │       └───dist
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-jsx
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───argparse
│   │   └───lib
│   ├───array-buffer-byte-length
│   │   ├───.github
│   │   └───test
│   ├───array-includes
│   │   ├───.github
│   │   └───test
│   ├───array.prototype.flat
│   │   ├───.github
│   │   └───test
│   ├───array.prototype.flatmap
│   │   ├───.github
│   │   └───test
│   ├───array.prototype.tosorted
│   │   ├───.github
│   │   └───test
│   ├───arraybuffer.prototype.slice
│   │   └───test
│   ├───asynciterator.prototype
│   │   ├───.github
│   │   └───test
│   ├───asynckit
│   │   └───lib
│   ├───available-typed-arrays
│   │   ├───.github
│   │   └───test
│   ├───axios
│   │   ├───dist
│   │   │   ├───browser
│   │   │   ├───esm
│   │   │   └───node
│   │   └───lib
│   │       ├───adapters
│   │       ├───cancel
│   │       ├───core
│   │       ├───defaults
│   │       ├───env
│   │       │   └───classes
│   │       ├───helpers
│   │       └───platform
│   │           ├───browser
│   │           │   └───classes
│   │           ├───common
│   │           └───node
│   │               └───classes
│   ├───balanced-match
│   │   └───.github
│   ├───brace-expansion
│   ├───browserslist
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───callsites
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───chalk
│   │   └───types
│   ├───classnames
│   ├───color-convert
│   ├───color-name
│   ├───combined-stream
│   │   └───lib
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───convert-source-map
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───csstype
│   ├───debug
│   │   └───src
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───define-data-property
│   │   ├───.github
│   │   └───test
│   ├───define-properties
│   │   └───.github
│   ├───delayed-stream
│   │   └───lib
│   ├───doctrine
│   │   └───lib
│   ├───electron-to-chromium
│   ├───enquire.js
│   │   ├───dist
│   │   └───src
│   ├───es-abstract
│   │   ├───2015
│   │   ├───2016
│   │   ├───2017
│   │   ├───2018
│   │   ├───2019
│   │   ├───2020
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───2021
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───2022
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───2023
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───5
│   │   ├───helpers
│   │   └───operations
│   ├───es-iterator-helpers
│   │   ├───.github
│   │   ├───aos
│   │   ├───Iterator
│   │   ├───Iterator.from
│   │   ├───Iterator.prototype
│   │   ├───Iterator.prototype.constructor
│   │   ├───Iterator.prototype.drop
│   │   ├───Iterator.prototype.every
│   │   ├───Iterator.prototype.filter
│   │   ├───Iterator.prototype.find
│   │   ├───Iterator.prototype.flatMap
│   │   ├───Iterator.prototype.forEach
│   │   ├───Iterator.prototype.map
│   │   ├───Iterator.prototype.reduce
│   │   ├───Iterator.prototype.some
│   │   ├───Iterator.prototype.take
│   │   ├───Iterator.prototype.toArray
│   │   ├───IteratorHelperPrototype
│   │   ├───test
│   │   │   └───helpers
│   │   └───WrapForValidIteratorPrototype
│   ├───es-set-tostringtag
│   │   └───test
│   ├───es-shim-unscopables
│   │   ├───.github
│   │   └───test
│   ├───es-to-primitive
│   │   ├───.github
│   │   ├───helpers
│   │   └───test
│   ├───esbuild
│   │   ├───bin
│   │   └───lib
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-string-regexp
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───config
│   │   │   ├───eslint
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       ├───patterns
│   │   │   │       └───unicode
│   │   │   ├───shared
│   │   │   └───source-code
│   │   │       └───token-store
│   │   ├───messages
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───escape-string-regexp
│   │       ├───globals
│   │       ├───has-flag
│   │       └───supports-color
│   ├───eslint-plugin-react
│   │   ├───configs
│   │   ├───lib
│   │   │   ├───rules
│   │   │   └───util
│   │   └───node_modules
│   │       └───doctrine
│   │           └───lib
│   ├───eslint-plugin-react-hooks
│   │   └───cjs
│   ├───eslint-plugin-react-refresh
│   ├───eslint-scope
│   │   ├───dist
│   │   └───lib
│   ├───eslint-visitor-keys
│   │   ├───dist
│   │   └───lib
│   ├───espree
│   │   ├───dist
│   │   └───lib
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───esutils
│   │   └───lib
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fastq
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───file-entry-cache
│   ├───find-up
│   ├───flat-cache
│   │   └───src
│   ├───flatted
│   │   ├───cjs
│   │   ├───esm
│   │   ├───php
│   │   └───python
│   │       └───__pycache__
│   ├───follow-redirects
│   ├───for-each
│   │   └───test
│   ├───form-data
│   │   └───lib
│   ├───fs.realpath
│   ├───function-bind
│   │   ├───.github
│   │   └───test
│   ├───function.prototype.name
│   │   ├───.github
│   │   ├───helpers
│   │   └───test
│   ├───functions-have-names
│   │   ├───.github
│   │   └───test
│   ├───gensync
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-symbol-description
│   │   ├───.github
│   │   └───test
│   ├───glob
│   ├───glob-parent
│   ├───globals
│   ├───globalthis
│   │   └───test
│   ├───gopd
│   │   ├───.github
│   │   └───test
│   ├───graphemer
│   │   └───lib
│   ├───has-bigints
│   │   ├───.github
│   │   └───test
│   ├───has-flag
│   ├───has-property-descriptors
│   │   ├───.github
│   │   └───test
│   ├───has-proto
│   │   ├───.github
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-tostringtag
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hasown
│   │   └───.github
│   ├───ignore
│   ├───import-fresh
│   ├───imurmurhash
│   ├───inflight
│   ├───inherits
│   ├───internal-slot
│   │   ├───.github
│   │   └───test
│   ├───is-array-buffer
│   │   ├───.github
│   │   └───test
│   ├───is-async-function
│   │   └───test
│   ├───is-bigint
│   │   ├───.github
│   │   └───test
│   ├───is-boolean-object
│   │   ├───.github
│   │   └───test
│   ├───is-callable
│   │   ├───.github
│   │   └───test
│   ├───is-core-module
│   │   └───test
│   ├───is-date-object
│   │   ├───.github
│   │   └───test
│   ├───is-extglob
│   ├───is-finalizationregistry
│   │   ├───.github
│   │   └───test
│   ├───is-generator-function
│   │   └───test
│   ├───is-glob
│   ├───is-map
│   │   ├───.github
│   │   └───test
│   ├───is-negative-zero
│   │   ├───.github
│   │   └───test
│   ├───is-number-object
│   │   ├───.github
│   │   └───test
│   ├───is-path-inside
│   ├───is-regex
│   │   └───test
│   ├───is-set
│   │   ├───.github
│   │   └───test
│   ├───is-shared-array-buffer
│   │   ├───.github
│   │   └───test
│   ├───is-string
│   │   ├───.github
│   │   └───test
│   ├───is-symbol
│   │   ├───.github
│   │   └───test
│   ├───is-typed-array
│   │   ├───.github
│   │   └───test
│   ├───is-weakmap
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───is-weakref
│   │   ├───.github
│   │   └───test
│   ├───is-weakset
│   │   ├───.github
│   │   └───test
│   ├───isarray
│   ├───isexe
│   │   └───test
│   ├───iterator.prototype
│   │   ├───.github
│   │   └───test
│   ├───jquery
│   │   ├───dist
│   │   └───src
│   │       ├───ajax
│   │       │   └───var
│   │       ├───attributes
│   │       ├───core
│   │       │   └───var
│   │       ├───css
│   │       │   └───var
│   │       ├───data
│   │       │   └───var
│   │       ├───deferred
│   │       ├───deprecated
│   │       ├───effects
│   │       ├───event
│   │       ├───exports
│   │       ├───manipulation
│   │       │   └───var
│   │       ├───queue
│   │       ├───selector
│   │       ├───traversing
│   │       │   └───var
│   │       └───var
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       ├───schema
│   │       └───type
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json-buffer
│   │   └───test
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───json2mq
│   │   └───test
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───jsx-ast-utils
│   │   ├───.github
│   │   ├───lib
│   │   │   └───values
│   │   │       └───expressions
│   │   ├───src
│   │   │   └───values
│   │   │       └───expressions
│   │   └───__tests__
│   │       └───src
│   ├───keyv
│   │   └───src
│   ├───levn
│   │   └───lib
│   ├───locate-path
│   ├───lodash.debounce
│   ├───lodash.merge
│   ├───loose-envify
│   ├───lru-cache
│   ├───mime-db
│   ├───mime-types
│   ├───minimatch
│   ├───ms
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───natural-compare
│   ├───node-releases
│   │   └───data
│   │       ├───processed
│   │       └───release-schedule
│   ├───object-assign
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───object-keys
│   │   └───test
│   ├───object.assign
│   │   ├───.github
│   │   ├───dist
│   │   └───test
│   ├───object.entries
│   │   └───test
│   ├───object.fromentries
│   │   └───test
│   ├───object.hasown
│   │   ├───.github
│   │   └───test
│   ├───object.values
│   │   └───test
│   ├───once
│   ├───optionator
│   │   └───lib
│   ├───p-limit
│   ├───p-locate
│   ├───parent-module
│   ├───path-exists
│   ├───path-is-absolute
│   ├───path-key
│   ├───path-parse
│   ├───picocolors
│   ├───postcss
│   │   └───lib
│   ├───prelude-ls
│   │   └───lib
│   ├───prop-types
│   │   └───lib
│   ├───proxy-from-env
│   ├───punycode
│   ├───queue-microtask
│   ├───react
│   │   ├───cjs
│   │   └───umd
│   ├───react-dom
│   │   ├───cjs
│   │   └───umd
│   ├───react-is
│   │   ├───cjs
│   │   └───umd
│   ├───react-refresh
│   │   └───cjs
│   ├───react-router
│   │   └───dist
│   │       ├───lib
│   │       └───umd
│   ├───react-router-dom
│   │   └───dist
│   │       └───umd
│   ├───react-slick
│   │   ├───dist
│   │   └───lib
│   │       └───utils
│   ├───reflect.getprototypeof
│   │   └───test
│   ├───regexp.prototype.flags
│   │   └───test
│   ├───resize-observer-polyfill
│   │   ├───dist
│   │   └───src
│   │       ├───shims
│   │       └───utils
│   ├───resolve
│   │   ├───.github
│   │   ├───bin
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───empty_main
│   │       │   ├───false_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───missing_index
│   │       │   ├───missing_main
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───null_main
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-from
│   ├───reusify
│   │   └───benchmarks
│   ├───rimraf
│   ├───rollup
│   │   └───dist
│   │       ├───bin
│   │       ├───es
│   │       │   └───shared
│   │       └───shared
│   ├───run-parallel
│   ├───safe-array-concat
│   │   ├───.github
│   │   └───test
│   ├───safe-regex-test
│   │   ├───.github
│   │   └───test
│   ├───scheduler
│   │   ├───cjs
│   │   └───umd
│   ├───semver
│   │   └───bin
│   ├───set-function-length
│   │   └───.github
│   ├───set-function-name
│   │   └───.github
│   ├───shebang-command
│   ├───shebang-regex
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───slick-carousel
│   │   └───slick
│   │       └───fonts
│   ├───source-map-js
│   │   └───lib
│   ├───string-convert
│   │   └───test
│   ├───string.prototype.matchall
│   │   ├───.github
│   │   └───test
│   ├───string.prototype.trim
│   │   └───test
│   ├───string.prototype.trimend
│   │   └───test
│   ├───string.prototype.trimstart
│   │   └───test
│   ├───strip-ansi
│   ├───strip-json-comments
│   ├───supports-color
│   ├───supports-preserve-symlinks-flag
│   │   ├───.github
│   │   └───test
│   ├───text-table
│   │   ├───example
│   │   └───test
│   ├───to-fast-properties
│   ├───type-check
│   │   └───lib
│   ├───type-fest
│   │   ├───source
│   │   └───ts41
│   ├───typed-array-buffer
│   │   ├───.github
│   │   └───test
│   ├───typed-array-byte-length
│   │   ├───.github
│   │   └───test
│   ├───typed-array-byte-offset
│   │   ├───.github
│   │   └───test
│   ├───typed-array-length
│   │   ├───.github
│   │   └───test
│   ├───unbox-primitive
│   │   ├───.github
│   │   └───test
│   ├───update-browserslist-db
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───vite
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───client
│   │   │   ├───node
│   │   │   │   └───chunks
│   │   │   └───node-cjs
│   │   └───types
│   ├───which
│   │   └───bin
│   ├───which-boxed-primitive
│   │   ├───.github
│   │   └───test
│   ├───which-builtin-type
│   │   └───test
│   ├───which-collection
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───which-typed-array
│   │   ├───.github
│   │   └───test
│   ├───wrappy
│   ├───yallist
│   └───yocto-queue
├───public
└───src
    ├───assets
    ├───common
    │   ├───ButtonNav
    │   ├───CustomInput
    │   ├───Footer
    │   ├───Header
    │   ├───Neon
    │   ├───Searchbar
    │   └───UserContext
    ├───media
    ├───pages
    │   ├───Banner
    │   ├───Body
    │   ├───Cocktails
    │   ├───Home
    │   ├───Login
    │   ├───Profile
    │   ├───Register
    │   └───Routes
    └───services

# Project Structure

- **`public/`:** Contains the `index.html` file serving as the main template for the application.

- **`src/`:** Contains the source code of the application.
  - **`components/`:** Stores all React components, such as `CocktailList` and `CocktailDetails`.
  - **`services/`:** Contains services, like `api.js`, handling calls to TheCocktailDB API.
  - **`App.js`:** The main component acting as the entry point of the application.
  - **`index.js`:** The main file that initializes the React application.

- **`.gitignore`:** Specifies files and directories to be ignored when tracking with Git.

- **`package.json`:** Node.js configuration file containing information about the project and its dependencies.

## Contributions

Contributions are welcome! Feel free to make improvements, bug fixes, or add new features. Open an issue to discuss major changes before submitting a pull request.

## License

This project is under the MIT License.
