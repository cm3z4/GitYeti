console.log("main.js is working.");

// const axios = require('axios');
// const $ = require('jquery');

// This function uses the https://github.com/huchenme/github-trending-api repo, see link for docs.


// Fill #lang-drop with langs data.
const langs = [{
        "urlParam": "1c-enterprise",
        "name": "1C Enterprise"
    },
    {
        "urlParam": "abap",
        "name": "ABAP"
    },
    {
        "urlParam": "abnf",
        "name": "ABNF"
    },
    {
        "urlParam": "actionscript",
        "name": "ActionScript"
    },
    {
        "urlParam": "ada",
        "name": "Ada"
    },
    {
        "urlParam": "adobe-font-metrics",
        "name": "Adobe Font Metrics"
    },
    {
        "urlParam": "agda",
        "name": "Agda"
    },
    {
        "urlParam": "ags-script",
        "name": "AGS Script"
    },
    {
        "urlParam": "alloy",
        "name": "Alloy"
    },
    {
        "urlParam": "alpine-abuild",
        "name": "Alpine Abuild"
    },
    {
        "urlParam": "ampl",
        "name": "AMPL"
    },
    {
        "urlParam": "angelscript",
        "name": "AngelScript"
    },
    {
        "urlParam": "ant-build-system",
        "name": "Ant Build System"
    },
    {
        "urlParam": "antlr",
        "name": "ANTLR"
    },
    {
        "urlParam": "apacheconf",
        "name": "ApacheConf"
    },
    {
        "urlParam": "apex",
        "name": "Apex"
    },
    {
        "urlParam": "api-blueprint",
        "name": "API Blueprint"
    },
    {
        "urlParam": "apl",
        "name": "APL"
    },
    {
        "urlParam": "apollo-guidance-computer",
        "name": "Apollo Guidance Computer"
    },
    {
        "urlParam": "applescript",
        "name": "AppleScript"
    },
    {
        "urlParam": "arc",
        "name": "Arc"
    },
    {
        "urlParam": "asciidoc",
        "name": "AsciiDoc"
    },
    {
        "urlParam": "asn.1",
        "name": "ASN.1"
    },
    {
        "urlParam": "asp",
        "name": "ASP"
    },
    {
        "urlParam": "aspectj",
        "name": "AspectJ"
    },
    {
        "urlParam": "assembly",
        "name": "Assembly"
    },
    {
        "urlParam": "ats",
        "name": "ATS"
    },
    {
        "urlParam": "augeas",
        "name": "Augeas"
    },
    {
        "urlParam": "autohotkey",
        "name": "AutoHotkey"
    },
    {
        "urlParam": "autoit",
        "name": "AutoIt"
    },
    {
        "urlParam": "awk",
        "name": "Awk"
    },
    {
        "urlParam": "ballerina",
        "name": "Ballerina"
    },
    {
        "urlParam": "batchfile",
        "name": "Batchfile"
    },
    {
        "urlParam": "befunge",
        "name": "Befunge"
    },
    {
        "urlParam": "bison",
        "name": "Bison"
    },
    {
        "urlParam": "bitbake",
        "name": "BitBake"
    },
    {
        "urlParam": "blade",
        "name": "Blade"
    },
    {
        "urlParam": "blitzbasic",
        "name": "BlitzBasic"
    },
    {
        "urlParam": "blitzmax",
        "name": "BlitzMax"
    },
    {
        "urlParam": "bluespec",
        "name": "Bluespec"
    },
    {
        "urlParam": "boo",
        "name": "Boo"
    },
    {
        "urlParam": "brainfuck",
        "name": "Brainfuck"
    },
    {
        "urlParam": "brightscript",
        "name": "Brightscript"
    },
    {
        "urlParam": "bro",
        "name": "Bro"
    },
    {
        "urlParam": "c",
        "name": "C"
    },
    {
        "urlParam": "c%23",
        "name": "C#"
    },
    {
        "urlParam": "c%2B%2B",
        "name": "C++"
    },
    {
        "urlParam": "c-objdump",
        "name": "C-ObjDump"
    },
    {
        "urlParam": "c2hs-haskell",
        "name": "C2hs Haskell"
    },
    {
        "urlParam": "cap'n-proto",
        "name": "Cap'n Proto"
    },
    {
        "urlParam": "cartocss",
        "name": "CartoCSS"
    },
    {
        "urlParam": "ceylon",
        "name": "Ceylon"
    },
    {
        "urlParam": "chapel",
        "name": "Chapel"
    },
    {
        "urlParam": "charity",
        "name": "Charity"
    },
    {
        "urlParam": "chuck",
        "name": "ChucK"
    },
    {
        "urlParam": "cirru",
        "name": "Cirru"
    },
    {
        "urlParam": "clarion",
        "name": "Clarion"
    },
    {
        "urlParam": "clean",
        "name": "Clean"
    },
    {
        "urlParam": "click",
        "name": "Click"
    },
    {
        "urlParam": "clips",
        "name": "CLIPS"
    },
    {
        "urlParam": "clojure",
        "name": "Clojure"
    },
    {
        "urlParam": "closure-templates",
        "name": "Closure Templates"
    },
    {
        "urlParam": "cmake",
        "name": "CMake"
    },
    {
        "urlParam": "cobol",
        "name": "COBOL"
    },
    {
        "urlParam": "coffeescript",
        "name": "CoffeeScript"
    },
    {
        "urlParam": "coldfusion",
        "name": "ColdFusion"
    },
    {
        "urlParam": "coldfusion-cfc",
        "name": "ColdFusion CFC"
    },
    {
        "urlParam": "collada",
        "name": "COLLADA"
    },
    {
        "urlParam": "common-lisp",
        "name": "Common Lisp"
    },
    {
        "urlParam": "common-workflow-language",
        "name": "Common Workflow Language"
    },
    {
        "urlParam": "component-pascal",
        "name": "Component Pascal"
    },
    {
        "urlParam": "cool",
        "name": "Cool"
    },
    {
        "urlParam": "coq",
        "name": "Coq"
    },
    {
        "urlParam": "cpp-objdump",
        "name": "Cpp-ObjDump"
    },
    {
        "urlParam": "creole",
        "name": "Creole"
    },
    {
        "urlParam": "crystal",
        "name": "Crystal"
    },
    {
        "urlParam": "cson",
        "name": "CSON"
    },
    {
        "urlParam": "csound",
        "name": "Csound"
    },
    {
        "urlParam": "csound-document",
        "name": "Csound Document"
    },
    {
        "urlParam": "csound-score",
        "name": "Csound Score"
    },
    {
        "urlParam": "css",
        "name": "CSS"
    },
    {
        "urlParam": "csv",
        "name": "CSV"
    },
    {
        "urlParam": "cuda",
        "name": "Cuda"
    },
    {
        "urlParam": "cweb",
        "name": "CWeb"
    },
    {
        "urlParam": "cycript",
        "name": "Cycript"
    },
    {
        "urlParam": "cython",
        "name": "Cython"
    },
    {
        "urlParam": "d",
        "name": "D"
    },
    {
        "urlParam": "d-objdump",
        "name": "D-ObjDump"
    },
    {
        "urlParam": "darcs-patch",
        "name": "Darcs Patch"
    },
    {
        "urlParam": "dart",
        "name": "Dart"
    },
    {
        "urlParam": "dataweave",
        "name": "DataWeave"
    },
    {
        "urlParam": "desktop",
        "name": "desktop"
    },
    {
        "urlParam": "diff",
        "name": "Diff"
    },
    {
        "urlParam": "digital-command-language",
        "name": "DIGITAL Command Language"
    },
    {
        "urlParam": "dm",
        "name": "DM"
    },
    {
        "urlParam": "dns-zone",
        "name": "DNS Zone"
    },
    {
        "urlParam": "dockerfile",
        "name": "Dockerfile"
    },
    {
        "urlParam": "dogescript",
        "name": "Dogescript"
    },
    {
        "urlParam": "dtrace",
        "name": "DTrace"
    },
    {
        "urlParam": "dylan",
        "name": "Dylan"
    },
    {
        "urlParam": "e",
        "name": "E"
    },
    {
        "urlParam": "eagle",
        "name": "Eagle"
    },
    {
        "urlParam": "easybuild",
        "name": "Easybuild"
    },
    {
        "urlParam": "ebnf",
        "name": "EBNF"
    },
    {
        "urlParam": "ec",
        "name": "eC"
    },
    {
        "urlParam": "ecere-projects",
        "name": "Ecere Projects"
    },
    {
        "urlParam": "ecl",
        "name": "ECL"
    },
    {
        "urlParam": "eclipse",
        "name": "ECLiPSe"
    },
    {
        "urlParam": "edje-data-collection",
        "name": "Edje Data Collection"
    },
    {
        "urlParam": "edn",
        "name": "edn"
    },
    {
        "urlParam": "eiffel",
        "name": "Eiffel"
    },
    {
        "urlParam": "ejs",
        "name": "EJS"
    },
    {
        "urlParam": "elixir",
        "name": "Elixir"
    },
    {
        "urlParam": "elm",
        "name": "Elm"
    },
    {
        "urlParam": "emacs-lisp",
        "name": "Emacs Lisp"
    },
    {
        "urlParam": "emberscript",
        "name": "EmberScript"
    },
    {
        "urlParam": "eq",
        "name": "EQ"
    },
    {
        "urlParam": "erlang",
        "name": "Erlang"
    },
    {
        "urlParam": "f%23",
        "name": "F#"
    },
    {
        "urlParam": "factor",
        "name": "Factor"
    },
    {
        "urlParam": "fancy",
        "name": "Fancy"
    },
    {
        "urlParam": "fantom",
        "name": "Fantom"
    },
    {
        "urlParam": "filebench-wml",
        "name": "Filebench WML"
    },
    {
        "urlParam": "filterscript",
        "name": "Filterscript"
    },
    {
        "urlParam": "fish",
        "name": "fish"
    },
    {
        "urlParam": "flux",
        "name": "FLUX"
    },
    {
        "urlParam": "formatted",
        "name": "Formatted"
    },
    {
        "urlParam": "forth",
        "name": "Forth"
    },
    {
        "urlParam": "fortran",
        "name": "Fortran"
    },
    {
        "urlParam": "freemarker",
        "name": "FreeMarker"
    },
    {
        "urlParam": "frege",
        "name": "Frege"
    },
    {
        "urlParam": "g-code",
        "name": "G-code"
    },
    {
        "urlParam": "game-maker-language",
        "name": "Game Maker Language"
    },
    {
        "urlParam": "gams",
        "name": "GAMS"
    },
    {
        "urlParam": "gap",
        "name": "GAP"
    },
    {
        "urlParam": "gcc-machine-description",
        "name": "GCC Machine Description"
    },
    {
        "urlParam": "gdb",
        "name": "GDB"
    },
    {
        "urlParam": "gdscript",
        "name": "GDScript"
    },
    {
        "urlParam": "genie",
        "name": "Genie"
    },
    {
        "urlParam": "genshi",
        "name": "Genshi"
    },
    {
        "urlParam": "gentoo-ebuild",
        "name": "Gentoo Ebuild"
    },
    {
        "urlParam": "gentoo-eclass",
        "name": "Gentoo Eclass"
    },
    {
        "urlParam": "gerber-image",
        "name": "Gerber Image"
    },
    {
        "urlParam": "gettext-catalog",
        "name": "Gettext Catalog"
    },
    {
        "urlParam": "gherkin",
        "name": "Gherkin"
    },
    {
        "urlParam": "glsl",
        "name": "GLSL"
    },
    {
        "urlParam": "glyph",
        "name": "Glyph"
    },
    {
        "urlParam": "gn",
        "name": "GN"
    },
    {
        "urlParam": "gnuplot",
        "name": "Gnuplot"
    },
    {
        "urlParam": "go",
        "name": "Go"
    },
    {
        "urlParam": "golo",
        "name": "Golo"
    },
    {
        "urlParam": "gosu",
        "name": "Gosu"
    },
    {
        "urlParam": "grace",
        "name": "Grace"
    },
    {
        "urlParam": "gradle",
        "name": "Gradle"
    },
    {
        "urlParam": "grammatical-framework",
        "name": "Grammatical Framework"
    },
    {
        "urlParam": "graph-modeling-language",
        "name": "Graph Modeling Language"
    },
    {
        "urlParam": "graphql",
        "name": "GraphQL"
    },
    {
        "urlParam": "graphviz-(dot)",
        "name": "Graphviz (DOT)"
    },
    {
        "urlParam": "groovy",
        "name": "Groovy"
    },
    {
        "urlParam": "groovy-server-pages",
        "name": "Groovy Server Pages"
    },
    {
        "urlParam": "hack",
        "name": "Hack"
    },
    {
        "urlParam": "haml",
        "name": "Haml"
    },
    {
        "urlParam": "handlebars",
        "name": "Handlebars"
    },
    {
        "urlParam": "harbour",
        "name": "Harbour"
    },
    {
        "urlParam": "haskell",
        "name": "Haskell"
    },
    {
        "urlParam": "haxe",
        "name": "Haxe"
    },
    {
        "urlParam": "hcl",
        "name": "HCL"
    },
    {
        "urlParam": "hlsl",
        "name": "HLSL"
    },
    {
        "urlParam": "html",
        "name": "HTML"
    },
    {
        "urlParam": "html%2Bdjango",
        "name": "HTML+Django"
    },
    {
        "urlParam": "html%2Becr",
        "name": "HTML+ECR"
    },
    {
        "urlParam": "html%2Beex",
        "name": "HTML+EEX"
    },
    {
        "urlParam": "html%2Berb",
        "name": "HTML+ERB"
    },
    {
        "urlParam": "html%2Bphp",
        "name": "HTML+PHP"
    },
    {
        "urlParam": "http",
        "name": "HTTP"
    },
    {
        "urlParam": "hy",
        "name": "Hy"
    },
    {
        "urlParam": "hyphy",
        "name": "HyPhy"
    },
    {
        "urlParam": "idl",
        "name": "IDL"
    },
    {
        "urlParam": "idris",
        "name": "Idris"
    },
    {
        "urlParam": "igor-pro",
        "name": "IGOR Pro"
    },
    {
        "urlParam": "inform-7",
        "name": "Inform 7"
    },
    {
        "urlParam": "ini",
        "name": "INI"
    },
    {
        "urlParam": "inno-setup",
        "name": "Inno Setup"
    },
    {
        "urlParam": "io",
        "name": "Io"
    },
    {
        "urlParam": "ioke",
        "name": "Ioke"
    },
    {
        "urlParam": "irc-log",
        "name": "IRC log"
    },
    {
        "urlParam": "isabelle",
        "name": "Isabelle"
    },
    {
        "urlParam": "isabelle-root",
        "name": "Isabelle ROOT"
    },
    {
        "urlParam": "j",
        "name": "J"
    },
    {
        "urlParam": "jasmin",
        "name": "Jasmin"
    },
    {
        "urlParam": "java",
        "name": "Java"
    },
    {
        "urlParam": "java-server-pages",
        "name": "Java Server Pages"
    },
    {
        "urlParam": "javascript",
        "name": "JavaScript"
    },
    {
        "urlParam": "jflex",
        "name": "JFlex"
    },
    {
        "urlParam": "jison",
        "name": "Jison"
    },
    {
        "urlParam": "jison-lex",
        "name": "Jison Lex"
    },
    {
        "urlParam": "jolie",
        "name": "Jolie"
    },
    {
        "urlParam": "json",
        "name": "JSON"
    },
    {
        "urlParam": "json5",
        "name": "JSON5"
    },
    {
        "urlParam": "jsoniq",
        "name": "JSONiq"
    },
    {
        "urlParam": "jsonld",
        "name": "JSONLD"
    },
    {
        "urlParam": "jsx",
        "name": "JSX"
    },
    {
        "urlParam": "julia",
        "name": "Julia"
    },
    {
        "urlParam": "jupyter-notebook",
        "name": "Jupyter Notebook"
    },
    {
        "urlParam": "kicad-layout",
        "name": "KiCad Layout"
    },
    {
        "urlParam": "kicad-legacy-layout",
        "name": "KiCad Legacy Layout"
    },
    {
        "urlParam": "kicad-schematic",
        "name": "KiCad Schematic"
    },
    {
        "urlParam": "kit",
        "name": "Kit"
    },
    {
        "urlParam": "kotlin",
        "name": "Kotlin"
    },
    {
        "urlParam": "krl",
        "name": "KRL"
    },
    {
        "urlParam": "labview",
        "name": "LabVIEW"
    },
    {
        "urlParam": "lasso",
        "name": "Lasso"
    },
    {
        "urlParam": "latte",
        "name": "Latte"
    },
    {
        "urlParam": "lean",
        "name": "Lean"
    },
    {
        "urlParam": "less",
        "name": "Less"
    },
    {
        "urlParam": "lex",
        "name": "Lex"
    },
    {
        "urlParam": "lfe",
        "name": "LFE"
    },
    {
        "urlParam": "lilypond",
        "name": "LilyPond"
    },
    {
        "urlParam": "limbo",
        "name": "Limbo"
    },
    {
        "urlParam": "linker-script",
        "name": "Linker Script"
    },
    {
        "urlParam": "linux-kernel-module",
        "name": "Linux Kernel Module"
    },
    {
        "urlParam": "liquid",
        "name": "Liquid"
    },
    {
        "urlParam": "literate-agda",
        "name": "Literate Agda"
    },
    {
        "urlParam": "literate-coffeescript",
        "name": "Literate CoffeeScript"
    },
    {
        "urlParam": "literate-haskell",
        "name": "Literate Haskell"
    },
    {
        "urlParam": "livescript",
        "name": "LiveScript"
    },
    {
        "urlParam": "llvm",
        "name": "LLVM"
    },
    {
        "urlParam": "logos",
        "name": "Logos"
    },
    {
        "urlParam": "logtalk",
        "name": "Logtalk"
    },
    {
        "urlParam": "lolcode",
        "name": "LOLCODE"
    },
    {
        "urlParam": "lookml",
        "name": "LookML"
    },
    {
        "urlParam": "loomscript",
        "name": "LoomScript"
    },
    {
        "urlParam": "lsl",
        "name": "LSL"
    },
    {
        "urlParam": "lua",
        "name": "Lua"
    },
    {
        "urlParam": "m",
        "name": "M"
    },
    {
        "urlParam": "m4",
        "name": "M4"
    },
    {
        "urlParam": "m4sugar",
        "name": "M4Sugar"
    },
    {
        "urlParam": "makefile",
        "name": "Makefile"
    },
    {
        "urlParam": "mako",
        "name": "Mako"
    },
    {
        "urlParam": "markdown",
        "name": "Markdown"
    },
    {
        "urlParam": "marko",
        "name": "Marko"
    },
    {
        "urlParam": "mask",
        "name": "Mask"
    },
    {
        "urlParam": "mathematica",
        "name": "Mathematica"
    },
    {
        "urlParam": "matlab",
        "name": "Matlab"
    },
    {
        "urlParam": "maven-pom",
        "name": "Maven POM"
    },
    {
        "urlParam": "max",
        "name": "Max"
    },
    {
        "urlParam": "maxscript",
        "name": "MAXScript"
    },
    {
        "urlParam": "mediawiki",
        "name": "MediaWiki"
    },
    {
        "urlParam": "mercury",
        "name": "Mercury"
    },
    {
        "urlParam": "meson",
        "name": "Meson"
    },
    {
        "urlParam": "metal",
        "name": "Metal"
    },
    {
        "urlParam": "minid",
        "name": "MiniD"
    },
    {
        "urlParam": "mirah",
        "name": "Mirah"
    },
    {
        "urlParam": "modelica",
        "name": "Modelica"
    },
    {
        "urlParam": "modula-2",
        "name": "Modula-2"
    },
    {
        "urlParam": "module-management-system",
        "name": "Module Management System"
    },
    {
        "urlParam": "monkey",
        "name": "Monkey"
    },
    {
        "urlParam": "moocode",
        "name": "Moocode"
    },
    {
        "urlParam": "moonscript",
        "name": "MoonScript"
    },
    {
        "urlParam": "mql4",
        "name": "MQL4"
    },
    {
        "urlParam": "mql5",
        "name": "MQL5"
    },
    {
        "urlParam": "mtml",
        "name": "MTML"
    },
    {
        "urlParam": "muf",
        "name": "MUF"
    },
    {
        "urlParam": "mupad",
        "name": "mupad"
    },
    {
        "urlParam": "myghty",
        "name": "Myghty"
    },
    {
        "urlParam": "ncl",
        "name": "NCL"
    },
    {
        "urlParam": "nearley",
        "name": "Nearley"
    },
    {
        "urlParam": "nemerle",
        "name": "Nemerle"
    },
    {
        "urlParam": "nesc",
        "name": "nesC"
    },
    {
        "urlParam": "netlinx",
        "name": "NetLinx"
    },
    {
        "urlParam": "netlinx%2Berb",
        "name": "NetLinx+ERB"
    },
    {
        "urlParam": "netlogo",
        "name": "NetLogo"
    },
    {
        "urlParam": "newlisp",
        "name": "NewLisp"
    },
    {
        "urlParam": "nextflow",
        "name": "Nextflow"
    },
    {
        "urlParam": "nginx",
        "name": "Nginx"
    },
    {
        "urlParam": "nim",
        "name": "Nim"
    },
    {
        "urlParam": "ninja",
        "name": "Ninja"
    },
    {
        "urlParam": "nit",
        "name": "Nit"
    },
    {
        "urlParam": "nix",
        "name": "Nix"
    },
    {
        "urlParam": "nl",
        "name": "NL"
    },
    {
        "urlParam": "nsis",
        "name": "NSIS"
    },
    {
        "urlParam": "nu",
        "name": "Nu"
    },
    {
        "urlParam": "numpy",
        "name": "NumPy"
    },
    {
        "urlParam": "objdump",
        "name": "ObjDump"
    },
    {
        "urlParam": "objective-c",
        "name": "Objective-C"
    },
    {
        "urlParam": "objective-c%2B%2B",
        "name": "Objective-C++"
    },
    {
        "urlParam": "objective-j",
        "name": "Objective-J"
    },
    {
        "urlParam": "ocaml",
        "name": "OCaml"
    },
    {
        "urlParam": "omgrofl",
        "name": "Omgrofl"
    },
    {
        "urlParam": "ooc",
        "name": "ooc"
    },
    {
        "urlParam": "opa",
        "name": "Opa"
    },
    {
        "urlParam": "opal",
        "name": "Opal"
    },
    {
        "urlParam": "opencl",
        "name": "OpenCL"
    },
    {
        "urlParam": "openedge-abl",
        "name": "OpenEdge ABL"
    },
    {
        "urlParam": "openrc-runscript",
        "name": "OpenRC runscript"
    },
    {
        "urlParam": "openscad",
        "name": "OpenSCAD"
    },
    {
        "urlParam": "opentype-feature-file",
        "name": "OpenType Feature File"
    },
    {
        "urlParam": "org",
        "name": "Org"
    },
    {
        "urlParam": "ox",
        "name": "Ox"
    },
    {
        "urlParam": "oxygene",
        "name": "Oxygene"
    },
    {
        "urlParam": "oz",
        "name": "Oz"
    },
    {
        "urlParam": "p4",
        "name": "P4"
    },
    {
        "urlParam": "pan",
        "name": "Pan"
    },
    {
        "urlParam": "papyrus",
        "name": "Papyrus"
    },
    {
        "urlParam": "parrot",
        "name": "Parrot"
    },
    {
        "urlParam": "parrot-assembly",
        "name": "Parrot Assembly"
    },
    {
        "urlParam": "parrot-internal-representation",
        "name": "Parrot Internal Representation"
    },
    {
        "urlParam": "pascal",
        "name": "Pascal"
    },
    {
        "urlParam": "pawn",
        "name": "PAWN"
    },
    {
        "urlParam": "pep8",
        "name": "Pep8"
    },
    {
        "urlParam": "perl",
        "name": "Perl"
    },
    {
        "urlParam": "perl-6",
        "name": "Perl 6"
    },
    {
        "urlParam": "php",
        "name": "PHP"
    },
    {
        "urlParam": "pic",
        "name": "Pic"
    },
    {
        "urlParam": "pickle",
        "name": "Pickle"
    },
    {
        "urlParam": "picolisp",
        "name": "PicoLisp"
    },
    {
        "urlParam": "piglatin",
        "name": "PigLatin"
    },
    {
        "urlParam": "pike",
        "name": "Pike"
    },
    {
        "urlParam": "plpgsql",
        "name": "PLpgSQL"
    },
    {
        "urlParam": "plsql",
        "name": "PLSQL"
    },
    {
        "urlParam": "pod",
        "name": "Pod"
    },
    {
        "urlParam": "pogoscript",
        "name": "PogoScript"
    },
    {
        "urlParam": "pony",
        "name": "Pony"
    },
    {
        "urlParam": "postcss",
        "name": "PostCSS"
    },
    {
        "urlParam": "postscript",
        "name": "PostScript"
    },
    {
        "urlParam": "pov-ray-sdl",
        "name": "POV-Ray SDL"
    },
    {
        "urlParam": "powerbuilder",
        "name": "PowerBuilder"
    },
    {
        "urlParam": "powershell",
        "name": "PowerShell"
    },
    {
        "urlParam": "processing",
        "name": "Processing"
    },
    {
        "urlParam": "prolog",
        "name": "Prolog"
    },
    {
        "urlParam": "propeller-spin",
        "name": "Propeller Spin"
    },
    {
        "urlParam": "protocol-buffer",
        "name": "Protocol Buffer"
    },
    {
        "urlParam": "public-key",
        "name": "Public Key"
    },
    {
        "urlParam": "pug",
        "name": "Pug"
    },
    {
        "urlParam": "puppet",
        "name": "Puppet"
    },
    {
        "urlParam": "pure-data",
        "name": "Pure Data"
    },
    {
        "urlParam": "purebasic",
        "name": "PureBasic"
    },
    {
        "urlParam": "purescript",
        "name": "PureScript"
    },
    {
        "urlParam": "python",
        "name": "Python"
    },
    {
        "urlParam": "python-console",
        "name": "Python console"
    },
    {
        "urlParam": "python-traceback",
        "name": "Python traceback"
    },
    {
        "urlParam": "qmake",
        "name": "QMake"
    },
    {
        "urlParam": "qml",
        "name": "QML"
    },
    {
        "urlParam": "r",
        "name": "R"
    },
    {
        "urlParam": "racket",
        "name": "Racket"
    },
    {
        "urlParam": "ragel",
        "name": "Ragel"
    },
    {
        "urlParam": "raml",
        "name": "RAML"
    },
    {
        "urlParam": "rascal",
        "name": "Rascal"
    },
    {
        "urlParam": "raw-token-data",
        "name": "Raw token data"
    },
    {
        "urlParam": "rdoc",
        "name": "RDoc"
    },
    {
        "urlParam": "realbasic",
        "name": "REALbasic"
    },
    {
        "urlParam": "reason",
        "name": "Reason"
    },
    {
        "urlParam": "rebol",
        "name": "Rebol"
    },
    {
        "urlParam": "red",
        "name": "Red"
    },
    {
        "urlParam": "redcode",
        "name": "Redcode"
    },
    {
        "urlParam": "regular-expression",
        "name": "Regular Expression"
    },
    {
        "urlParam": "ren'py",
        "name": "Ren'Py"
    },
    {
        "urlParam": "renderscript",
        "name": "RenderScript"
    },
    {
        "urlParam": "restructuredtext",
        "name": "reStructuredText"
    },
    {
        "urlParam": "rexx",
        "name": "REXX"
    },
    {
        "urlParam": "rhtml",
        "name": "RHTML"
    },
    {
        "urlParam": "ring",
        "name": "Ring"
    },
    {
        "urlParam": "rmarkdown",
        "name": "RMarkdown"
    },
    {
        "urlParam": "robotframework",
        "name": "RobotFramework"
    },
    {
        "urlParam": "roff",
        "name": "Roff"
    },
    {
        "urlParam": "rouge",
        "name": "Rouge"
    },
    {
        "urlParam": "rpc",
        "name": "RPC"
    },
    {
        "urlParam": "rpm-spec",
        "name": "RPM Spec"
    },
    {
        "urlParam": "ruby",
        "name": "Ruby"
    },
    {
        "urlParam": "runoff",
        "name": "RUNOFF"
    },
    {
        "urlParam": "rust",
        "name": "Rust"
    },
    {
        "urlParam": "sage",
        "name": "Sage"
    },
    {
        "urlParam": "saltstack",
        "name": "SaltStack"
    },
    {
        "urlParam": "sas",
        "name": "SAS"
    },
    {
        "urlParam": "sass",
        "name": "Sass"
    },
    {
        "urlParam": "scala",
        "name": "Scala"
    },
    {
        "urlParam": "scaml",
        "name": "Scaml"
    },
    {
        "urlParam": "scheme",
        "name": "Scheme"
    },
    {
        "urlParam": "scilab",
        "name": "Scilab"
    },
    {
        "urlParam": "scss",
        "name": "SCSS"
    },
    {
        "urlParam": "sed",
        "name": "sed"
    },
    {
        "urlParam": "self",
        "name": "Self"
    },
    {
        "urlParam": "shaderlab",
        "name": "ShaderLab"
    },
    {
        "urlParam": "shell",
        "name": "Shell"
    },
    {
        "urlParam": "shellsession",
        "name": "ShellSession"
    },
    {
        "urlParam": "shen",
        "name": "Shen"
    },
    {
        "urlParam": "slash",
        "name": "Slash"
    },
    {
        "urlParam": "slim",
        "name": "Slim"
    },
    {
        "urlParam": "smali",
        "name": "Smali"
    },
    {
        "urlParam": "smalltalk",
        "name": "Smalltalk"
    },
    {
        "urlParam": "smarty",
        "name": "Smarty"
    },
    {
        "urlParam": "smt",
        "name": "SMT"
    },
    {
        "urlParam": "solidity",
        "name": "Solidity"
    },
    {
        "urlParam": "sourcepawn",
        "name": "SourcePawn"
    },
    {
        "urlParam": "sparql",
        "name": "SPARQL"
    },
    {
        "urlParam": "spline-font-database",
        "name": "Spline Font Database"
    },
    {
        "urlParam": "sqf",
        "name": "SQF"
    },
    {
        "urlParam": "sql",
        "name": "SQL"
    },
    {
        "urlParam": "sqlpl",
        "name": "SQLPL"
    },
    {
        "urlParam": "squirrel",
        "name": "Squirrel"
    },
    {
        "urlParam": "srecode-template",
        "name": "SRecode Template"
    },
    {
        "urlParam": "stan",
        "name": "Stan"
    },
    {
        "urlParam": "standard-ml",
        "name": "Standard ML"
    },
    {
        "urlParam": "stata",
        "name": "Stata"
    },
    {
        "urlParam": "ston",
        "name": "STON"
    },
    {
        "urlParam": "stylus",
        "name": "Stylus"
    },
    {
        "urlParam": "sublime-text-config",
        "name": "Sublime Text Config"
    },
    {
        "urlParam": "subrip-text",
        "name": "SubRip Text"
    },
    {
        "urlParam": "sugarss",
        "name": "SugarSS"
    },
    {
        "urlParam": "supercollider",
        "name": "SuperCollider"
    },
    {
        "urlParam": "svg",
        "name": "SVG"
    },
    {
        "urlParam": "swift",
        "name": "Swift"
    },
    {
        "urlParam": "systemverilog",
        "name": "SystemVerilog"
    },
    {
        "urlParam": "tcl",
        "name": "Tcl"
    },
    {
        "urlParam": "tcsh",
        "name": "Tcsh"
    },
    {
        "urlParam": "tea",
        "name": "Tea"
    },
    {
        "urlParam": "terra",
        "name": "Terra"
    },
    {
        "urlParam": "tex",
        "name": "TeX"
    },
    {
        "urlParam": "text",
        "name": "Text"
    },
    {
        "urlParam": "textile",
        "name": "Textile"
    },
    {
        "urlParam": "thrift",
        "name": "Thrift"
    },
    {
        "urlParam": "ti-program",
        "name": "TI Program"
    },
    {
        "urlParam": "tla",
        "name": "TLA"
    },
    {
        "urlParam": "toml",
        "name": "TOML"
    },
    {
        "urlParam": "turing",
        "name": "Turing"
    },
    {
        "urlParam": "turtle",
        "name": "Turtle"
    },
    {
        "urlParam": "twig",
        "name": "Twig"
    },
    {
        "urlParam": "txl",
        "name": "TXL"
    },
    {
        "urlParam": "type-language",
        "name": "Type Language"
    },
    {
        "urlParam": "typescript",
        "name": "TypeScript"
    },
    {
        "urlParam": "unified-parallel-c",
        "name": "Unified Parallel C"
    },
    {
        "urlParam": "unity3d-asset",
        "name": "Unity3D Asset"
    },
    {
        "urlParam": "unix-assembly",
        "name": "Unix Assembly"
    },
    {
        "urlParam": "uno",
        "name": "Uno"
    },
    {
        "urlParam": "unrealscript",
        "name": "UnrealScript"
    },
    {
        "urlParam": "urweb",
        "name": "UrWeb"
    },
    {
        "urlParam": "vala",
        "name": "Vala"
    },
    {
        "urlParam": "vcl",
        "name": "VCL"
    },
    {
        "urlParam": "verilog",
        "name": "Verilog"
    },
    {
        "urlParam": "vhdl",
        "name": "VHDL"
    },
    {
        "urlParam": "vim-script",
        "name": "Vim script"
    },
    {
        "urlParam": "visual-basic",
        "name": "Visual Basic"
    },
    {
        "urlParam": "volt",
        "name": "Volt"
    },
    {
        "urlParam": "vue",
        "name": "Vue"
    },
    {
        "urlParam": "wavefront-material",
        "name": "Wavefront Material"
    },
    {
        "urlParam": "wavefront-object",
        "name": "Wavefront Object"
    },
    {
        "urlParam": "wdl",
        "name": "wdl"
    },
    {
        "urlParam": "web-ontology-language",
        "name": "Web Ontology Language"
    },
    {
        "urlParam": "webassembly",
        "name": "WebAssembly"
    },
    {
        "urlParam": "webidl",
        "name": "WebIDL"
    },
    {
        "urlParam": "wisp",
        "name": "wisp"
    },
    {
        "urlParam": "world-of-warcraft-addon-data",
        "name": "World of Warcraft Addon Data"
    },
    {
        "urlParam": "x10",
        "name": "X10"
    },
    {
        "urlParam": "xbase",
        "name": "xBase"
    },
    {
        "urlParam": "xc",
        "name": "XC"
    },
    {
        "urlParam": "xcompose",
        "name": "XCompose"
    },
    {
        "urlParam": "xml",
        "name": "XML"
    },
    {
        "urlParam": "xojo",
        "name": "Xojo"
    },
    {
        "urlParam": "xpages",
        "name": "XPages"
    },
    {
        "urlParam": "xpm",
        "name": "XPM"
    },
    {
        "urlParam": "xproc",
        "name": "XProc"
    },
    {
        "urlParam": "xquery",
        "name": "XQuery"
    },
    {
        "urlParam": "xs",
        "name": "XS"
    },
    {
        "urlParam": "xslt",
        "name": "XSLT"
    },
    {
        "urlParam": "xtend",
        "name": "Xtend"
    },
    {
        "urlParam": "yacc",
        "name": "Yacc"
    },
    {
        "urlParam": "yaml",
        "name": "YAML"
    },
    {
        "urlParam": "yang",
        "name": "YANG"
    },
    {
        "urlParam": "yara",
        "name": "YARA"
    },
    {
        "urlParam": "zephir",
        "name": "Zephir"
    },
    {
        "urlParam": "zimpl",
        "name": "Zimpl"
    }
];

// $('#lang-drop').empty();
$.each(langs, function (i, l) {
    $('#lang-drop').append($('<option></option>').val(l.urlParam).html(l.name));
});
// **********

// Fill #spoke-drop with spoke data.
const spoke = [{
        "urlParam": "ab",
        "name": "Abkhazian"
    },
    {
        "urlParam": "aa",
        "name": "Afar"
    },
    {
        "urlParam": "af",
        "name": "Afrikaans"
    },
    {
        "urlParam": "ak",
        "name": "Akan"
    },
    {
        "urlParam": "sq",
        "name": "Albanian"
    },
    {
        "urlParam": "am",
        "name": "Amharic"
    },
    {
        "urlParam": "ar",
        "name": "Arabic"
    },
    {
        "urlParam": "an",
        "name": "Aragonese"
    },
    {
        "urlParam": "hy",
        "name": "Armenian"
    },
    {
        "urlParam": "as",
        "name": "Assamese"
    },
    {
        "urlParam": "av",
        "name": "Avaric"
    },
    {
        "urlParam": "ae",
        "name": "Avestan"
    },
    {
        "urlParam": "ay",
        "name": "Aymara"
    },
    {
        "urlParam": "az",
        "name": "Azerbaijani"
    },
    {
        "urlParam": "bm",
        "name": "Bambara"
    },
    {
        "urlParam": "ba",
        "name": "Bashkir"
    },
    {
        "urlParam": "eu",
        "name": "Basque"
    },
    {
        "urlParam": "be",
        "name": "Belarusian"
    },
    {
        "urlParam": "bn",
        "name": "Bengali"
    },
    {
        "urlParam": "bh",
        "name": "Bihari languages"
    },
    {
        "urlParam": "bi",
        "name": "Bislama"
    },
    {
        "urlParam": "bs",
        "name": "Bosnian"
    },
    {
        "urlParam": "br",
        "name": "Breton"
    },
    {
        "urlParam": "bg",
        "name": "Bulgarian"
    },
    {
        "urlParam": "my",
        "name": "Burmese"
    },
    {
        "urlParam": "ca",
        "name": "Catalan, Valencian"
    },
    {
        "urlParam": "ch",
        "name": "Chamorro"
    },
    {
        "urlParam": "ce",
        "name": "Chechen"
    },
    {
        "urlParam": "ny",
        "name": "Chichewa, Chewa, Nyanja"
    },
    {
        "urlParam": "zh",
        "name": "Chinese"
    },
    {
        "urlParam": "cv",
        "name": "Chuvash"
    },
    {
        "urlParam": "kw",
        "name": "Cornish"
    },
    {
        "urlParam": "co",
        "name": "Corsican"
    },
    {
        "urlParam": "cr",
        "name": "Cree"
    },
    {
        "urlParam": "hr",
        "name": "Croatian"
    },
    {
        "urlParam": "cs",
        "name": "Czech"
    },
    {
        "urlParam": "da",
        "name": "Danish"
    },
    {
        "urlParam": "dv",
        "name": "Divehi, Dhivehi, Maldivian"
    },
    {
        "urlParam": "nl",
        "name": "Dutch, Flemish"
    },
    {
        "urlParam": "dz",
        "name": "Dzongkha"
    },
    {
        "urlParam": "eo",
        "name": "Esperanto"
    },
    {
        "urlParam": "et",
        "name": "Estonian"
    },
    {
        "urlParam": "ee",
        "name": "Ewe"
    },
    {
        "urlParam": "fo",
        "name": "Faroese"
    },
    {
        "urlParam": "fj",
        "name": "Fijian"
    },
    {
        "urlParam": "fi",
        "name": "Finnish"
    },
    {
        "urlParam": "fr",
        "name": "French"
    },
    {
        "urlParam": "ff",
        "name": "Fulah"
    },
    {
        "urlParam": "gl",
        "name": "Galician"
    },
    {
        "urlParam": "ka",
        "name": "Georgian"
    },
    {
        "urlParam": "de",
        "name": "German"
    },
    {
        "urlParam": "el",
        "name": "Greek, Modern"
    },
    {
        "urlParam": "gn",
        "name": "Guarani"
    },
    {
        "urlParam": "gu",
        "name": "Gujarati"
    },
    {
        "urlParam": "ht",
        "name": "Haitian, Haitian Creole"
    },
    {
        "urlParam": "ha",
        "name": "Hausa"
    },
    {
        "urlParam": "he",
        "name": "Hebrew"
    },
    {
        "urlParam": "hz",
        "name": "Herero"
    },
    {
        "urlParam": "hi",
        "name": "Hindi"
    },
    {
        "urlParam": "ho",
        "name": "Hiri Motu"
    },
    {
        "urlParam": "hu",
        "name": "Hungarian"
    },
    {
        "urlParam": "ia",
        "name": "Interlingua (International Auxil..."
    },
    {
        "urlParam": "id",
        "name": "Indonesian"
    },
    {
        "urlParam": "ie",
        "name": "Interlingue, Occidental"
    },
    {
        "urlParam": "ga",
        "name": "Irish"
    },
    {
        "urlParam": "ig",
        "name": "Igbo"
    },
    {
        "urlParam": "ik",
        "name": "Inupiaq"
    },
    {
        "urlParam": "io",
        "name": "Ido"
    },
    {
        "urlParam": "is",
        "name": "Icelandic"
    },
    {
        "urlParam": "it",
        "name": "Italian"
    },
    {
        "urlParam": "iu",
        "name": "Inuktitut"
    },
    {
        "urlParam": "ja",
        "name": "Japanese"
    },
    {
        "urlParam": "jv",
        "name": "Javanese"
    },
    {
        "urlParam": "kl",
        "name": "Kalaallisut, Greenlandic"
    },
    {
        "urlParam": "kn",
        "name": "Kannada"
    },
    {
        "urlParam": "kr",
        "name": "Kanuri"
    },
    {
        "urlParam": "ks",
        "name": "Kashmiri"
    },
    {
        "urlParam": "kk",
        "name": "Kazakh"
    },
    {
        "urlParam": "km",
        "name": "Central Khmer"
    },
    {
        "urlParam": "ki",
        "name": "Kikuyu, Gikuyu"
    },
    {
        "urlParam": "rw",
        "name": "Kinyarwanda"
    },
    {
        "urlParam": "ky",
        "name": "Kirghiz, Kyrgyz"
    },
    {
        "urlParam": "kv",
        "name": "Komi"
    },
    {
        "urlParam": "kg",
        "name": "Kongo"
    },
    {
        "urlParam": "ko",
        "name": "Korean"
    },
    {
        "urlParam": "ku",
        "name": "Kurdish"
    },
    {
        "urlParam": "kj",
        "name": "Kuanyama, Kwanyama"
    },
    {
        "urlParam": "la",
        "name": "Latin"
    },
    {
        "urlParam": "lb",
        "name": "Luxembourgish, Letzeburgesch"
    },
    {
        "urlParam": "lg",
        "name": "Ganda"
    },
    {
        "urlParam": "li",
        "name": "Limburgan, Limburger, Limburgish"
    },
    {
        "urlParam": "ln",
        "name": "Lingala"
    },
    {
        "urlParam": "lo",
        "name": "Lao"
    },
    {
        "urlParam": "lt",
        "name": "Lithuanian"
    },
    {
        "urlParam": "lu",
        "name": "Luba-Katanga"
    },
    {
        "urlParam": "lv",
        "name": "Latvian"
    },
    {
        "urlParam": "gv",
        "name": "Manx"
    },
    {
        "urlParam": "mk",
        "name": "Macedonian"
    },
    {
        "urlParam": "mg",
        "name": "Malagasy"
    },
    {
        "urlParam": "ms",
        "name": "Malay"
    },
    {
        "urlParam": "ml",
        "name": "Malayalam"
    },
    {
        "urlParam": "mt",
        "name": "Maltese"
    },
    {
        "urlParam": "mi",
        "name": "Maori"
    },
    {
        "urlParam": "mr",
        "name": "Marathi"
    },
    {
        "urlParam": "mh",
        "name": "Marshallese"
    },
    {
        "urlParam": "mn",
        "name": "Mongolian"
    },
    {
        "urlParam": "na",
        "name": "Nauru"
    },
    {
        "urlParam": "nv",
        "name": "Navajo, Navaho"
    },
    {
        "urlParam": "nd",
        "name": "North Ndebele"
    },
    {
        "urlParam": "ne",
        "name": "Nepali"
    },
    {
        "urlParam": "ng",
        "name": "Ndonga"
    },
    {
        "urlParam": "nb",
        "name": "Norwegian Bokmål"
    },
    {
        "urlParam": "nn",
        "name": "Norwegian Nynorsk"
    },
    {
        "urlParam": "no",
        "name": "Norwegian"
    },
    {
        "urlParam": "ii",
        "name": "Sichuan Yi, Nuosu"
    },
    {
        "urlParam": "nr",
        "name": "South Ndebele"
    },
    {
        "urlParam": "oc",
        "name": "Occitan"
    },
    {
        "urlParam": "oj",
        "name": "Ojibwa"
    },
    {
        "urlParam": "cu",
        "name": "Church Slavic, Old Slavonic, Chu..."
    },
    {
        "urlParam": "om",
        "name": "Oromo"
    },
    {
        "urlParam": "or",
        "name": "Oriya"
    },
    {
        "urlParam": "os",
        "name": "Ossetian, Ossetic"
    },
    {
        "urlParam": "pa",
        "name": "Punjabi, Panjabi"
    },
    {
        "urlParam": "pi",
        "name": "Pali"
    },
    {
        "urlParam": "fa",
        "name": "Persian"
    },
    {
        "urlParam": "pl",
        "name": "Polish"
    },
    {
        "urlParam": "ps",
        "name": "Pashto, Pushto"
    },
    {
        "urlParam": "pt",
        "name": "Portuguese"
    },
    {
        "urlParam": "qu",
        "name": "Quechua"
    },
    {
        "urlParam": "rm",
        "name": "Romansh"
    },
    {
        "urlParam": "rn",
        "name": "Rundi"
    },
    {
        "urlParam": "ro",
        "name": "Romanian, Moldavian, Moldovan"
    },
    {
        "urlParam": "ru",
        "name": "Russian"
    },
    {
        "urlParam": "sa",
        "name": "Sanskrit"
    },
    {
        "urlParam": "sc",
        "name": "Sardinian"
    },
    {
        "urlParam": "sd",
        "name": "Sindhi"
    },
    {
        "urlParam": "se",
        "name": "Northern Sami"
    },
    {
        "urlParam": "sm",
        "name": "Samoan"
    },
    {
        "urlParam": "sg",
        "name": "Sango"
    },
    {
        "urlParam": "sr",
        "name": "Serbian"
    },
    {
        "urlParam": "gd",
        "name": "Gaelic, Scottish Gaelic"
    },
    {
        "urlParam": "sn",
        "name": "Shona"
    },
    {
        "urlParam": "si",
        "name": "Sinhala, Sinhalese"
    },
    {
        "urlParam": "sk",
        "name": "Slovak"
    },
    {
        "urlParam": "sl",
        "name": "Slovenian"
    },
    {
        "urlParam": "so",
        "name": "Somali"
    },
    {
        "urlParam": "st",
        "name": "Southern Sotho"
    },
    {
        "urlParam": "es",
        "name": "Spanish, Castilian"
    },
    {
        "urlParam": "su",
        "name": "Sundanese"
    },
    {
        "urlParam": "sw",
        "name": "Swahili"
    },
    {
        "urlParam": "ss",
        "name": "Swati"
    },
    {
        "urlParam": "sv",
        "name": "Swedish"
    },
    {
        "urlParam": "ta",
        "name": "Tamil"
    },
    {
        "urlParam": "te",
        "name": "Telugu"
    },
    {
        "urlParam": "tg",
        "name": "Tajik"
    },
    {
        "urlParam": "th",
        "name": "Thai"
    },
    {
        "urlParam": "ti",
        "name": "Tigrinya"
    },
    {
        "urlParam": "bo",
        "name": "Tibetan"
    },
    {
        "urlParam": "tk",
        "name": "Turkmen"
    },
    {
        "urlParam": "tl",
        "name": "Tagalog"
    },
    {
        "urlParam": "tn",
        "name": "Tswana"
    },
    {
        "urlParam": "to",
        "name": "Tonga (Tonga Islands)"
    },
    {
        "urlParam": "tr",
        "name": "Turkish"
    },
    {
        "urlParam": "ts",
        "name": "Tsonga"
    },
    {
        "urlParam": "tt",
        "name": "Tatar"
    },
    {
        "urlParam": "tw",
        "name": "Twi"
    },
    {
        "urlParam": "ty",
        "name": "Tahitian"
    },
    {
        "urlParam": "ug",
        "name": "Uighur, Uyghur"
    },
    {
        "urlParam": "uk",
        "name": "Ukrainian"
    },
    {
        "urlParam": "ur",
        "name": "Urdu"
    },
    {
        "urlParam": "uz",
        "name": "Uzbek"
    },
    {
        "urlParam": "ve",
        "name": "Venda"
    },
    {
        "urlParam": "vi",
        "name": "Vietnamese"
    },
    {
        "urlParam": "vo",
        "name": "Volapük"
    },
    {
        "urlParam": "wa",
        "name": "Walloon"
    },
    {
        "urlParam": "cy",
        "name": "Welsh"
    },
    {
        "urlParam": "wo",
        "name": "Wolof"
    },
    {
        "urlParam": "fy",
        "name": "Western Frisian"
    },
    {
        "urlParam": "xh",
        "name": "Xhosa"
    },
    {
        "urlParam": "yi",
        "name": "Yiddish"
    },
    {
        "urlParam": "yo",
        "name": "Yoruba"
    },
    {
        "urlParam": "za",
        "name": "Zhuang, Chuang"
    },
    {
        "urlParam": "zu",
        "name": "Zulu"
    }
];

// $('#spoke-drop').empty();
$.each(spoke, function (i, l) {
    $('#spoke-drop').append($('<option></option>').val(l.urlParam).html(l.name));
});
// **********

// Main function.
function getTrending() {

    let type = document.getElementById('type-drop').value;
    console.log(type);
    let lang = document.getElementById('lang-drop').value;
    console.log(lang);
    let since = document.getElementById('since-drop').value;
    console.log(since);

    let apiType = "";
    let apiSince = "";
    let apiLang = "";

    switch (type) {
        case 'repositories':
            // console.log("Case: repositories");
            apiType = "repositories";
            switch (since) {
                case 'daily':
                    // console.log("Case: daily");
                    apiSince = "since=daily"
                    break;
                case 'weekly':
                    apiSince = "since=weekly"
                    //console.log(apiSince);
                    break;
                case 'monthly':
                    apiSince = "since=monthly"
                    //console.log(apiSince);
                    break;
                default: // Do nothing.
            };

            switch (lang) {
                case 'all':
                    // console.log("Case: daily");
                    apiLang = "?"
                    break;
                default:
                    apiLang = `?language=${lang}&`
            };

            break;
        case 'developers':
            console.log("Case: developers");
            apiType = "developers";
            switch (since) {
                case 'daily':
                    // console.log("Case: daily");
                    apiSince = "?since=daily"
                    break;
                case 'weekly':
                    apiSince = "?since=weekly"
                    //console.log(apiSince);
                    break;
                case 'monthly':
                    apiSince = "?since=monthly"
                    //console.log(apiSince);
                    break;
                default: // Do nothing.
            };

            switch (lang) {
                case 'all':
                    // console.log("Case: daily");
                    apiLang = "?"
                    break;
                default:
                    apiLang = `?language=${lang}&`
            };

            break;
        default:
    };

    let axiosURL;

    axiosURL = `https://github-trending-api.now.sh/${apiType}${apiLang}${apiSince}`;
    console.log(axiosURL);

    axios.get(axiosURL)
        .then(function (response) {

            //console.log(response.data);

            var trendingCol1 = document.createElement('div');
            trendingCol1.setAttribute('class', 'trend-cont');

            var trendingCol2 = document.createElement('div');
            trendingCol2.setAttribute('class', 'trend-cont');

            var trendingCol3 = document.createElement('div');
            trendingCol3.setAttribute('class', 'trend-cont');

            // Variable for keeping track of which column to place content, see below for logic.
            let columnCounter = 1;

            Object.keys(response.data).forEach(key => {

                console.log(key);

                switch (apiType) {
                    case 'repositories':

                        let authorR = JSON.stringify(response.data[key].author).replace(/['"]+/g, '');
                        let avatarR = JSON.stringify(response.data[key].avatar);
                        let repoR = JSON.stringify(response.data[key].url).replace(/['"]+/g, '');
                        let infoR = JSON.stringify(response.data[key].description).replace(/['"]+/g, '');
                        let starsR = JSON.stringify(response.data[key].stars);
                        let forksR = JSON.stringify(response.data[key].forks).replace(/['"]+/g, '');
                        let langR;
                        let langColorR;

                        // Check is language object exists.
                        if (response.data[key].language) {
                            langR = JSON.stringify(response.data[key].language).replace(/['"]+/g, '');
                        } else {
                            langR = "Unknown";
                            langColorR = "#f25f4c"
                        }

                        // Check is languageColor object exists.
                        if (response.data[key].languageColor) {
                            langColorR = JSON.stringify(response.data[key].languageColor).replace(/['"]+/g, '');
                        }

                        // Check is description object is empty.
                        if (response.data[key].description === "") {
                            infoR = "No Description."
                        }

                        if (columnCounter === 1 && parseInt(key) < 24) {
                            trendingCol1.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img class="trending-cards trending-img-size rounded" src=${avatarR} alt="avatar">
                                    <h4 class="trending-cards text-limit">${authorR}</h4>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        if (columnCounter === 2 && parseInt(key) < 24) {
                            trendingCol2.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img class="trending-cards trending-img-size rounded" src=${avatarR} alt="avatar">
                                    <h4 class="trending-cards text-limit">${authorR}</h4>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        if (columnCounter === 3 && parseInt(key) < 24) {
                            trendingCol3.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img class="trending-cards trending-img-size rounded" src=${avatarR} alt="avatar">
                                    <h4 class="trending-cards">${authorR}</h4>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        // Logic for counter which column to inject content accordingly.
                        columnCounter++;

                        if (columnCounter === 4) {
                            columnCounter = 1;
                        }

                        break;
                    case 'developers':
                        let userName = JSON.stringify(response.data[key].username).replace(/['"]+/g, '');
                        let name = JSON.stringify(response.data[key].name).replace(/['"]+/g, '');
                        // let type = JSON.stringify(response.data[key].type).replace(/['"]+/g, '');
                        let userURL = JSON.stringify(response.data[key].url).replace(/['"]+/g, '');
                        let avatar = JSON.stringify(response.data[key].avatar);
                        let repoName = JSON.stringify(response.data[key].repo.name).replace(/['"]+/g, '');
                        let repoInfo = JSON.stringify(response.data[key].repo.description).replace(/['"]+/g, '');
                        let repoURL = JSON.stringify(response.data[key].repo.url).replace(/['"]+/g, '');

                        let stars = JSON.stringify(response.data[key].stars);

                        if (columnCounter === 1 && parseInt(key) < 24) {
                            trendingCol1.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img src=${avatar} class="trending-img-size rounded" alt="avatar">
                                    <h4 class="trending-cards text-limit">${name}</h4>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        if (columnCounter === 2 && parseInt(key) < 24) {
                            trendingCol2.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img src=${avatar} class="trending-img-size rounded" alt="avatar">
                                    <h4 class="trending-cards text-limit">${name}</h4>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        if (columnCounter === 3 && parseInt(key) < 24) {
                            trendingCol3.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <img src=${avatar} class="trending-img-size rounded" alt="avatar">
                                    <h4 class="trending-cards text-limit">${name}</h4>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        // Logic for counter which column to inject content accordingly.
                        columnCounter++;

                        if (columnCounter === 4) {
                            columnCounter = 1;
                        }
                        break;
                    default:
                };

            });


            $('#sandbox-1').html(trendingCol1);
            $('#sandbox-2').html(trendingCol2);
            $('#sandbox-3').html(trendingCol3);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}

$('#type-drop').on('change', function () {
    getTrending()
    // $('#navSelectDiv').collapse('hide');
});
$('#lang-drop').on('change', function () {
    getTrending()
    // $('#navSelectDiv').collapse('hide');
});
$('#since-drop').on('change', function () {
    getTrending()
    // $('#navSelectDiv').collapse('hide');
});

// Start the API call on page load.
getTrending();