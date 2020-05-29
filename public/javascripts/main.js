console.log("main.js is working.");

// This function uses the https://github.com/huchenme/github-trending-api repo, see link for docs.

// Remove text-limit class if on a mobile device.
$(window).resize(function () {
    if ($(window).width() <= 768) {
        $('p').removeClass('text-limit');
    }
});

$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('p').addClass('text-limit');
    }
});

// Fill #lang-drop with langs data.
const langs = [{
        "urlParam": "1c-enterprise",
        "nameD": "1C Enterprise"
    },
    {
        "urlParam": "abap",
        "nameD": "ABAP"
    },
    {
        "urlParam": "abnf",
        "nameD": "ABNF"
    },
    {
        "urlParam": "actionscript",
        "nameD": "ActionScript"
    },
    {
        "urlParam": "ada",
        "nameD": "Ada"
    },
    {
        "urlParam": "adobe-font-metrics",
        "nameD": "Adobe Font Metrics"
    },
    {
        "urlParam": "agda",
        "nameD": "Agda"
    },
    {
        "urlParam": "ags-script",
        "nameD": "AGS Script"
    },
    {
        "urlParam": "alloy",
        "nameD": "Alloy"
    },
    {
        "urlParam": "alpine-abuild",
        "nameD": "Alpine Abuild"
    },
    {
        "urlParam": "ampl",
        "nameD": "AMPL"
    },
    {
        "urlParam": "angelscript",
        "nameD": "AngelScript"
    },
    {
        "urlParam": "ant-build-system",
        "nameD": "Ant Build System"
    },
    {
        "urlParam": "antlr",
        "nameD": "ANTLR"
    },
    {
        "urlParam": "apacheconf",
        "nameD": "ApacheConf"
    },
    {
        "urlParam": "apex",
        "nameD": "Apex"
    },
    {
        "urlParam": "api-blueprint",
        "nameD": "API Blueprint"
    },
    {
        "urlParam": "apl",
        "nameD": "APL"
    },
    {
        "urlParam": "apollo-guidance-computer",
        "nameD": "Apollo Guidance Computer"
    },
    {
        "urlParam": "applescript",
        "nameD": "AppleScript"
    },
    {
        "urlParam": "arc",
        "nameD": "Arc"
    },
    {
        "urlParam": "asciidoc",
        "nameD": "AsciiDoc"
    },
    {
        "urlParam": "asn.1",
        "nameD": "ASN.1"
    },
    {
        "urlParam": "asp",
        "nameD": "ASP"
    },
    {
        "urlParam": "aspectj",
        "nameD": "AspectJ"
    },
    {
        "urlParam": "assembly",
        "nameD": "Assembly"
    },
    {
        "urlParam": "ats",
        "nameD": "ATS"
    },
    {
        "urlParam": "augeas",
        "nameD": "Augeas"
    },
    {
        "urlParam": "autohotkey",
        "nameD": "AutoHotkey"
    },
    {
        "urlParam": "autoit",
        "nameD": "AutoIt"
    },
    {
        "urlParam": "awk",
        "nameD": "Awk"
    },
    {
        "urlParam": "ballerina",
        "nameD": "Ballerina"
    },
    {
        "urlParam": "batchfile",
        "nameD": "Batchfile"
    },
    {
        "urlParam": "befunge",
        "nameD": "Befunge"
    },
    {
        "urlParam": "bison",
        "nameD": "Bison"
    },
    {
        "urlParam": "bitbake",
        "nameD": "BitBake"
    },
    {
        "urlParam": "blade",
        "nameD": "Blade"
    },
    {
        "urlParam": "blitzbasic",
        "nameD": "BlitzBasic"
    },
    {
        "urlParam": "blitzmax",
        "nameD": "BlitzMax"
    },
    {
        "urlParam": "bluespec",
        "nameD": "Bluespec"
    },
    {
        "urlParam": "boo",
        "nameD": "Boo"
    },
    {
        "urlParam": "brainfuck",
        "nameD": "Brainfuck"
    },
    {
        "urlParam": "brightscript",
        "nameD": "Brightscript"
    },
    {
        "urlParam": "bro",
        "nameD": "Bro"
    },
    {
        "urlParam": "c",
        "nameD": "C"
    },
    {
        "urlParam": "c%23",
        "nameD": "C#"
    },
    {
        "urlParam": "c%2B%2B",
        "nameD": "C++"
    },
    {
        "urlParam": "c-objdump",
        "nameD": "C-ObjDump"
    },
    {
        "urlParam": "c2hs-haskell",
        "nameD": "C2hs Haskell"
    },
    {
        "urlParam": "cap'n-proto",
        "nameD": "Cap'n Proto"
    },
    {
        "urlParam": "cartocss",
        "nameD": "CartoCSS"
    },
    {
        "urlParam": "ceylon",
        "nameD": "Ceylon"
    },
    {
        "urlParam": "chapel",
        "nameD": "Chapel"
    },
    {
        "urlParam": "charity",
        "nameD": "Charity"
    },
    {
        "urlParam": "chuck",
        "nameD": "ChucK"
    },
    {
        "urlParam": "cirru",
        "nameD": "Cirru"
    },
    {
        "urlParam": "clarion",
        "nameD": "Clarion"
    },
    {
        "urlParam": "clean",
        "nameD": "Clean"
    },
    {
        "urlParam": "click",
        "nameD": "Click"
    },
    {
        "urlParam": "clips",
        "nameD": "CLIPS"
    },
    {
        "urlParam": "clojure",
        "nameD": "Clojure"
    },
    {
        "urlParam": "closure-templates",
        "nameD": "Closure Templates"
    },
    {
        "urlParam": "cmake",
        "nameD": "CMake"
    },
    {
        "urlParam": "cobol",
        "nameD": "COBOL"
    },
    {
        "urlParam": "coffeescript",
        "nameD": "CoffeeScript"
    },
    {
        "urlParam": "coldfusion",
        "nameD": "ColdFusion"
    },
    {
        "urlParam": "coldfusion-cfc",
        "nameD": "ColdFusion CFC"
    },
    {
        "urlParam": "collada",
        "nameD": "COLLADA"
    },
    {
        "urlParam": "common-lisp",
        "nameD": "Common Lisp"
    },
    {
        "urlParam": "common-workflow-language",
        "nameD": "Common Workflow Language"
    },
    {
        "urlParam": "component-pascal",
        "nameD": "Component Pascal"
    },
    {
        "urlParam": "cool",
        "nameD": "Cool"
    },
    {
        "urlParam": "coq",
        "nameD": "Coq"
    },
    {
        "urlParam": "cpp-objdump",
        "nameD": "Cpp-ObjDump"
    },
    {
        "urlParam": "creole",
        "nameD": "Creole"
    },
    {
        "urlParam": "crystal",
        "nameD": "Crystal"
    },
    {
        "urlParam": "cson",
        "nameD": "CSON"
    },
    {
        "urlParam": "csound",
        "nameD": "Csound"
    },
    {
        "urlParam": "csound-document",
        "nameD": "Csound Document"
    },
    {
        "urlParam": "csound-score",
        "nameD": "Csound Score"
    },
    {
        "urlParam": "css",
        "nameD": "CSS"
    },
    {
        "urlParam": "csv",
        "nameD": "CSV"
    },
    {
        "urlParam": "cuda",
        "nameD": "Cuda"
    },
    {
        "urlParam": "cweb",
        "nameD": "CWeb"
    },
    {
        "urlParam": "cycript",
        "nameD": "Cycript"
    },
    {
        "urlParam": "cython",
        "nameD": "Cython"
    },
    {
        "urlParam": "d",
        "nameD": "D"
    },
    {
        "urlParam": "d-objdump",
        "nameD": "D-ObjDump"
    },
    {
        "urlParam": "darcs-patch",
        "nameD": "Darcs Patch"
    },
    {
        "urlParam": "dart",
        "nameD": "Dart"
    },
    {
        "urlParam": "dataweave",
        "nameD": "DataWeave"
    },
    {
        "urlParam": "desktop",
        "nameD": "desktop"
    },
    {
        "urlParam": "diff",
        "nameD": "Diff"
    },
    {
        "urlParam": "digital-command-language",
        "nameD": "DIGITAL Command Language"
    },
    {
        "urlParam": "dm",
        "nameD": "DM"
    },
    {
        "urlParam": "dns-zone",
        "nameD": "DNS Zone"
    },
    {
        "urlParam": "dockerfile",
        "nameD": "Dockerfile"
    },
    {
        "urlParam": "dogescript",
        "nameD": "Dogescript"
    },
    {
        "urlParam": "dtrace",
        "nameD": "DTrace"
    },
    {
        "urlParam": "dylan",
        "nameD": "Dylan"
    },
    {
        "urlParam": "e",
        "nameD": "E"
    },
    {
        "urlParam": "eagle",
        "nameD": "Eagle"
    },
    {
        "urlParam": "easybuild",
        "nameD": "Easybuild"
    },
    {
        "urlParam": "ebnf",
        "nameD": "EBNF"
    },
    {
        "urlParam": "ec",
        "nameD": "eC"
    },
    {
        "urlParam": "ecere-projects",
        "nameD": "Ecere Projects"
    },
    {
        "urlParam": "ecl",
        "nameD": "ECL"
    },
    {
        "urlParam": "eclipse",
        "nameD": "ECLiPSe"
    },
    {
        "urlParam": "edje-data-collection",
        "nameD": "Edje Data Collection"
    },
    {
        "urlParam": "edn",
        "nameD": "edn"
    },
    {
        "urlParam": "eiffel",
        "nameD": "Eiffel"
    },
    {
        "urlParam": "ejs",
        "nameD": "EJS"
    },
    {
        "urlParam": "elixir",
        "nameD": "Elixir"
    },
    {
        "urlParam": "elm",
        "nameD": "Elm"
    },
    {
        "urlParam": "emacs-lisp",
        "nameD": "Emacs Lisp"
    },
    {
        "urlParam": "emberscript",
        "nameD": "EmberScript"
    },
    {
        "urlParam": "eq",
        "nameD": "EQ"
    },
    {
        "urlParam": "erlang",
        "nameD": "Erlang"
    },
    {
        "urlParam": "f%23",
        "nameD": "F#"
    },
    {
        "urlParam": "factor",
        "nameD": "Factor"
    },
    {
        "urlParam": "fancy",
        "nameD": "Fancy"
    },
    {
        "urlParam": "fantom",
        "nameD": "Fantom"
    },
    {
        "urlParam": "filebench-wml",
        "nameD": "Filebench WML"
    },
    {
        "urlParam": "filterscript",
        "nameD": "Filterscript"
    },
    {
        "urlParam": "fish",
        "nameD": "fish"
    },
    {
        "urlParam": "flux",
        "nameD": "FLUX"
    },
    {
        "urlParam": "formatted",
        "nameD": "Formatted"
    },
    {
        "urlParam": "forth",
        "nameD": "Forth"
    },
    {
        "urlParam": "fortran",
        "nameD": "Fortran"
    },
    {
        "urlParam": "freemarker",
        "nameD": "FreeMarker"
    },
    {
        "urlParam": "frege",
        "nameD": "Frege"
    },
    {
        "urlParam": "g-code",
        "nameD": "G-code"
    },
    {
        "urlParam": "game-maker-language",
        "nameD": "Game Maker Language"
    },
    {
        "urlParam": "gams",
        "nameD": "GAMS"
    },
    {
        "urlParam": "gap",
        "nameD": "GAP"
    },
    {
        "urlParam": "gcc-machine-description",
        "nameD": "GCC Machine Description"
    },
    {
        "urlParam": "gdb",
        "nameD": "GDB"
    },
    {
        "urlParam": "gdscript",
        "nameD": "GDScript"
    },
    {
        "urlParam": "genie",
        "nameD": "Genie"
    },
    {
        "urlParam": "genshi",
        "nameD": "Genshi"
    },
    {
        "urlParam": "gentoo-ebuild",
        "nameD": "Gentoo Ebuild"
    },
    {
        "urlParam": "gentoo-eclass",
        "nameD": "Gentoo Eclass"
    },
    {
        "urlParam": "gerber-image",
        "nameD": "Gerber Image"
    },
    {
        "urlParam": "gettext-catalog",
        "nameD": "Gettext Catalog"
    },
    {
        "urlParam": "gherkin",
        "nameD": "Gherkin"
    },
    {
        "urlParam": "glsl",
        "nameD": "GLSL"
    },
    {
        "urlParam": "glyph",
        "nameD": "Glyph"
    },
    {
        "urlParam": "gn",
        "nameD": "GN"
    },
    {
        "urlParam": "gnuplot",
        "nameD": "Gnuplot"
    },
    {
        "urlParam": "go",
        "nameD": "Go"
    },
    {
        "urlParam": "golo",
        "nameD": "Golo"
    },
    {
        "urlParam": "gosu",
        "nameD": "Gosu"
    },
    {
        "urlParam": "grace",
        "nameD": "Grace"
    },
    {
        "urlParam": "gradle",
        "nameD": "Gradle"
    },
    {
        "urlParam": "grammatical-framework",
        "nameD": "Grammatical Framework"
    },
    {
        "urlParam": "graph-modeling-language",
        "nameD": "Graph Modeling Language"
    },
    {
        "urlParam": "graphql",
        "nameD": "GraphQL"
    },
    {
        "urlParam": "graphviz-(dot)",
        "nameD": "Graphviz (DOT)"
    },
    {
        "urlParam": "groovy",
        "nameD": "Groovy"
    },
    {
        "urlParam": "groovy-server-pages",
        "nameD": "Groovy Server Pages"
    },
    {
        "urlParam": "hack",
        "nameD": "Hack"
    },
    {
        "urlParam": "haml",
        "nameD": "Haml"
    },
    {
        "urlParam": "handlebars",
        "nameD": "Handlebars"
    },
    {
        "urlParam": "harbour",
        "nameD": "Harbour"
    },
    {
        "urlParam": "haskell",
        "nameD": "Haskell"
    },
    {
        "urlParam": "haxe",
        "nameD": "Haxe"
    },
    {
        "urlParam": "hcl",
        "nameD": "HCL"
    },
    {
        "urlParam": "hlsl",
        "nameD": "HLSL"
    },
    {
        "urlParam": "html",
        "nameD": "HTML"
    },
    {
        "urlParam": "html%2Bdjango",
        "nameD": "HTML+Django"
    },
    {
        "urlParam": "html%2Becr",
        "nameD": "HTML+ECR"
    },
    {
        "urlParam": "html%2Beex",
        "nameD": "HTML+EEX"
    },
    {
        "urlParam": "html%2Berb",
        "nameD": "HTML+ERB"
    },
    {
        "urlParam": "html%2Bphp",
        "nameD": "HTML+PHP"
    },
    {
        "urlParam": "http",
        "nameD": "HTTP"
    },
    {
        "urlParam": "hy",
        "nameD": "Hy"
    },
    {
        "urlParam": "hyphy",
        "nameD": "HyPhy"
    },
    {
        "urlParam": "idl",
        "nameD": "IDL"
    },
    {
        "urlParam": "idris",
        "nameD": "Idris"
    },
    {
        "urlParam": "igor-pro",
        "nameD": "IGOR Pro"
    },
    {
        "urlParam": "inform-7",
        "nameD": "Inform 7"
    },
    {
        "urlParam": "ini",
        "nameD": "INI"
    },
    {
        "urlParam": "inno-setup",
        "nameD": "Inno Setup"
    },
    {
        "urlParam": "io",
        "nameD": "Io"
    },
    {
        "urlParam": "ioke",
        "nameD": "Ioke"
    },
    {
        "urlParam": "irc-log",
        "nameD": "IRC log"
    },
    {
        "urlParam": "isabelle",
        "nameD": "Isabelle"
    },
    {
        "urlParam": "isabelle-root",
        "nameD": "Isabelle ROOT"
    },
    {
        "urlParam": "j",
        "nameD": "J"
    },
    {
        "urlParam": "jasmin",
        "nameD": "Jasmin"
    },
    {
        "urlParam": "java",
        "nameD": "Java"
    },
    {
        "urlParam": "java-server-pages",
        "nameD": "Java Server Pages"
    },
    {
        "urlParam": "javascript",
        "nameD": "JavaScript"
    },
    {
        "urlParam": "jflex",
        "nameD": "JFlex"
    },
    {
        "urlParam": "jison",
        "nameD": "Jison"
    },
    {
        "urlParam": "jison-lex",
        "nameD": "Jison Lex"
    },
    {
        "urlParam": "jolie",
        "nameD": "Jolie"
    },
    {
        "urlParam": "json",
        "nameD": "JSON"
    },
    {
        "urlParam": "json5",
        "nameD": "JSON5"
    },
    {
        "urlParam": "jsoniq",
        "nameD": "JSONiq"
    },
    {
        "urlParam": "jsonld",
        "nameD": "JSONLD"
    },
    {
        "urlParam": "jsx",
        "nameD": "JSX"
    },
    {
        "urlParam": "julia",
        "nameD": "Julia"
    },
    {
        "urlParam": "jupyter-notebook",
        "nameD": "Jupyter Notebook"
    },
    {
        "urlParam": "kicad-layout",
        "nameD": "KiCad Layout"
    },
    {
        "urlParam": "kicad-legacy-layout",
        "nameD": "KiCad Legacy Layout"
    },
    {
        "urlParam": "kicad-schematic",
        "nameD": "KiCad Schematic"
    },
    {
        "urlParam": "kit",
        "nameD": "Kit"
    },
    {
        "urlParam": "kotlin",
        "nameD": "Kotlin"
    },
    {
        "urlParam": "krl",
        "nameD": "KRL"
    },
    {
        "urlParam": "labview",
        "nameD": "LabVIEW"
    },
    {
        "urlParam": "lasso",
        "nameD": "Lasso"
    },
    {
        "urlParam": "latte",
        "nameD": "Latte"
    },
    {
        "urlParam": "lean",
        "nameD": "Lean"
    },
    {
        "urlParam": "less",
        "nameD": "Less"
    },
    {
        "urlParam": "lex",
        "nameD": "Lex"
    },
    {
        "urlParam": "lfe",
        "nameD": "LFE"
    },
    {
        "urlParam": "lilypond",
        "nameD": "LilyPond"
    },
    {
        "urlParam": "limbo",
        "nameD": "Limbo"
    },
    {
        "urlParam": "linker-script",
        "nameD": "Linker Script"
    },
    {
        "urlParam": "linux-kernel-module",
        "nameD": "Linux Kernel Module"
    },
    {
        "urlParam": "liquid",
        "nameD": "Liquid"
    },
    {
        "urlParam": "literate-agda",
        "nameD": "Literate Agda"
    },
    {
        "urlParam": "literate-coffeescript",
        "nameD": "Literate CoffeeScript"
    },
    {
        "urlParam": "literate-haskell",
        "nameD": "Literate Haskell"
    },
    {
        "urlParam": "livescript",
        "nameD": "LiveScript"
    },
    {
        "urlParam": "llvm",
        "nameD": "LLVM"
    },
    {
        "urlParam": "logos",
        "nameD": "Logos"
    },
    {
        "urlParam": "logtalk",
        "nameD": "Logtalk"
    },
    {
        "urlParam": "lolcode",
        "nameD": "LOLCODE"
    },
    {
        "urlParam": "lookml",
        "nameD": "LookML"
    },
    {
        "urlParam": "loomscript",
        "nameD": "LoomScript"
    },
    {
        "urlParam": "lsl",
        "nameD": "LSL"
    },
    {
        "urlParam": "lua",
        "nameD": "Lua"
    },
    {
        "urlParam": "m",
        "nameD": "M"
    },
    {
        "urlParam": "m4",
        "nameD": "M4"
    },
    {
        "urlParam": "m4sugar",
        "nameD": "M4Sugar"
    },
    {
        "urlParam": "makefile",
        "nameD": "Makefile"
    },
    {
        "urlParam": "mako",
        "nameD": "Mako"
    },
    {
        "urlParam": "markdown",
        "nameD": "Markdown"
    },
    {
        "urlParam": "marko",
        "nameD": "Marko"
    },
    {
        "urlParam": "mask",
        "nameD": "Mask"
    },
    {
        "urlParam": "mathematica",
        "nameD": "Mathematica"
    },
    {
        "urlParam": "matlab",
        "nameD": "Matlab"
    },
    {
        "urlParam": "maven-pom",
        "nameD": "Maven POM"
    },
    {
        "urlParam": "max",
        "nameD": "Max"
    },
    {
        "urlParam": "maxscript",
        "nameD": "MAXScript"
    },
    {
        "urlParam": "mediawiki",
        "nameD": "MediaWiki"
    },
    {
        "urlParam": "mercury",
        "nameD": "Mercury"
    },
    {
        "urlParam": "meson",
        "nameD": "Meson"
    },
    {
        "urlParam": "metal",
        "nameD": "Metal"
    },
    {
        "urlParam": "minid",
        "nameD": "MiniD"
    },
    {
        "urlParam": "mirah",
        "nameD": "Mirah"
    },
    {
        "urlParam": "modelica",
        "nameD": "Modelica"
    },
    {
        "urlParam": "modula-2",
        "nameD": "Modula-2"
    },
    {
        "urlParam": "module-management-system",
        "nameD": "Module Management System"
    },
    {
        "urlParam": "monkey",
        "nameD": "Monkey"
    },
    {
        "urlParam": "moocode",
        "nameD": "Moocode"
    },
    {
        "urlParam": "moonscript",
        "nameD": "MoonScript"
    },
    {
        "urlParam": "mql4",
        "nameD": "MQL4"
    },
    {
        "urlParam": "mql5",
        "nameD": "MQL5"
    },
    {
        "urlParam": "mtml",
        "nameD": "MTML"
    },
    {
        "urlParam": "muf",
        "nameD": "MUF"
    },
    {
        "urlParam": "mupad",
        "nameD": "mupad"
    },
    {
        "urlParam": "myghty",
        "nameD": "Myghty"
    },
    {
        "urlParam": "ncl",
        "nameD": "NCL"
    },
    {
        "urlParam": "nearley",
        "nameD": "Nearley"
    },
    {
        "urlParam": "nemerle",
        "nameD": "Nemerle"
    },
    {
        "urlParam": "nesc",
        "nameD": "nesC"
    },
    {
        "urlParam": "netlinx",
        "nameD": "NetLinx"
    },
    {
        "urlParam": "netlinx%2Berb",
        "nameD": "NetLinx+ERB"
    },
    {
        "urlParam": "netlogo",
        "nameD": "NetLogo"
    },
    {
        "urlParam": "newlisp",
        "nameD": "NewLisp"
    },
    {
        "urlParam": "nextflow",
        "nameD": "Nextflow"
    },
    {
        "urlParam": "nginx",
        "nameD": "Nginx"
    },
    {
        "urlParam": "nim",
        "nameD": "Nim"
    },
    {
        "urlParam": "ninja",
        "nameD": "Ninja"
    },
    {
        "urlParam": "nit",
        "nameD": "Nit"
    },
    {
        "urlParam": "nix",
        "nameD": "Nix"
    },
    {
        "urlParam": "nl",
        "nameD": "NL"
    },
    {
        "urlParam": "nsis",
        "nameD": "NSIS"
    },
    {
        "urlParam": "nu",
        "nameD": "Nu"
    },
    {
        "urlParam": "numpy",
        "nameD": "NumPy"
    },
    {
        "urlParam": "objdump",
        "nameD": "ObjDump"
    },
    {
        "urlParam": "objective-c",
        "nameD": "Objective-C"
    },
    {
        "urlParam": "objective-c%2B%2B",
        "nameD": "Objective-C++"
    },
    {
        "urlParam": "objective-j",
        "nameD": "Objective-J"
    },
    {
        "urlParam": "ocaml",
        "nameD": "OCaml"
    },
    {
        "urlParam": "omgrofl",
        "nameD": "Omgrofl"
    },
    {
        "urlParam": "ooc",
        "nameD": "ooc"
    },
    {
        "urlParam": "opa",
        "nameD": "Opa"
    },
    {
        "urlParam": "opal",
        "nameD": "Opal"
    },
    {
        "urlParam": "opencl",
        "nameD": "OpenCL"
    },
    {
        "urlParam": "openedge-abl",
        "nameD": "OpenEdge ABL"
    },
    {
        "urlParam": "openrc-runscript",
        "nameD": "OpenRC runscript"
    },
    {
        "urlParam": "openscad",
        "nameD": "OpenSCAD"
    },
    {
        "urlParam": "opentype-feature-file",
        "nameD": "OpenType Feature File"
    },
    {
        "urlParam": "org",
        "nameD": "Org"
    },
    {
        "urlParam": "ox",
        "nameD": "Ox"
    },
    {
        "urlParam": "oxygene",
        "nameD": "Oxygene"
    },
    {
        "urlParam": "oz",
        "nameD": "Oz"
    },
    {
        "urlParam": "p4",
        "nameD": "P4"
    },
    {
        "urlParam": "pan",
        "nameD": "Pan"
    },
    {
        "urlParam": "papyrus",
        "nameD": "Papyrus"
    },
    {
        "urlParam": "parrot",
        "nameD": "Parrot"
    },
    {
        "urlParam": "parrot-assembly",
        "nameD": "Parrot Assembly"
    },
    {
        "urlParam": "parrot-internal-representation",
        "nameD": "Parrot Internal Representation"
    },
    {
        "urlParam": "pascal",
        "nameD": "Pascal"
    },
    {
        "urlParam": "pawn",
        "nameD": "PAWN"
    },
    {
        "urlParam": "pep8",
        "nameD": "Pep8"
    },
    {
        "urlParam": "perl",
        "nameD": "Perl"
    },
    {
        "urlParam": "perl-6",
        "nameD": "Perl 6"
    },
    {
        "urlParam": "php",
        "nameD": "PHP"
    },
    {
        "urlParam": "pic",
        "nameD": "Pic"
    },
    {
        "urlParam": "pickle",
        "nameD": "Pickle"
    },
    {
        "urlParam": "picolisp",
        "nameD": "PicoLisp"
    },
    {
        "urlParam": "piglatin",
        "nameD": "PigLatin"
    },
    {
        "urlParam": "pike",
        "nameD": "Pike"
    },
    {
        "urlParam": "plpgsql",
        "nameD": "PLpgSQL"
    },
    {
        "urlParam": "plsql",
        "nameD": "PLSQL"
    },
    {
        "urlParam": "pod",
        "nameD": "Pod"
    },
    {
        "urlParam": "pogoscript",
        "nameD": "PogoScript"
    },
    {
        "urlParam": "pony",
        "nameD": "Pony"
    },
    {
        "urlParam": "postcss",
        "nameD": "PostCSS"
    },
    {
        "urlParam": "postscript",
        "nameD": "PostScript"
    },
    {
        "urlParam": "pov-ray-sdl",
        "nameD": "POV-Ray SDL"
    },
    {
        "urlParam": "powerbuilder",
        "nameD": "PowerBuilder"
    },
    {
        "urlParam": "powershell",
        "nameD": "PowerShell"
    },
    {
        "urlParam": "processing",
        "nameD": "Processing"
    },
    {
        "urlParam": "prolog",
        "nameD": "Prolog"
    },
    {
        "urlParam": "propeller-spin",
        "nameD": "Propeller Spin"
    },
    {
        "urlParam": "protocol-buffer",
        "nameD": "Protocol Buffer"
    },
    {
        "urlParam": "public-key",
        "nameD": "Public Key"
    },
    {
        "urlParam": "pug",
        "nameD": "Pug"
    },
    {
        "urlParam": "puppet",
        "nameD": "Puppet"
    },
    {
        "urlParam": "pure-data",
        "nameD": "Pure Data"
    },
    {
        "urlParam": "purebasic",
        "nameD": "PureBasic"
    },
    {
        "urlParam": "purescript",
        "nameD": "PureScript"
    },
    {
        "urlParam": "python",
        "nameD": "Python"
    },
    {
        "urlParam": "python-console",
        "nameD": "Python console"
    },
    {
        "urlParam": "python-traceback",
        "nameD": "Python traceback"
    },
    {
        "urlParam": "qmake",
        "nameD": "QMake"
    },
    {
        "urlParam": "qml",
        "nameD": "QML"
    },
    {
        "urlParam": "r",
        "nameD": "R"
    },
    {
        "urlParam": "racket",
        "nameD": "Racket"
    },
    {
        "urlParam": "ragel",
        "nameD": "Ragel"
    },
    {
        "urlParam": "raml",
        "nameD": "RAML"
    },
    {
        "urlParam": "rascal",
        "nameD": "Rascal"
    },
    {
        "urlParam": "raw-token-data",
        "nameD": "Raw token data"
    },
    {
        "urlParam": "rdoc",
        "nameD": "RDoc"
    },
    {
        "urlParam": "realbasic",
        "nameD": "REALbasic"
    },
    {
        "urlParam": "reason",
        "nameD": "Reason"
    },
    {
        "urlParam": "rebol",
        "nameD": "Rebol"
    },
    {
        "urlParam": "red",
        "nameD": "Red"
    },
    {
        "urlParam": "redcode",
        "nameD": "Redcode"
    },
    {
        "urlParam": "regular-expression",
        "nameD": "Regular Expression"
    },
    {
        "urlParam": "ren'py",
        "nameD": "Ren'Py"
    },
    {
        "urlParam": "renderscript",
        "nameD": "RenderScript"
    },
    {
        "urlParam": "restructuredtext",
        "nameD": "reStructuredText"
    },
    {
        "urlParam": "rexx",
        "nameD": "REXX"
    },
    {
        "urlParam": "rhtml",
        "nameD": "RHTML"
    },
    {
        "urlParam": "ring",
        "nameD": "Ring"
    },
    {
        "urlParam": "rmarkdown",
        "nameD": "RMarkdown"
    },
    {
        "urlParam": "robotframework",
        "nameD": "RobotFramework"
    },
    {
        "urlParam": "roff",
        "nameD": "Roff"
    },
    {
        "urlParam": "rouge",
        "nameD": "Rouge"
    },
    {
        "urlParam": "rpc",
        "nameD": "RPC"
    },
    {
        "urlParam": "rpm-spec",
        "nameD": "RPM Spec"
    },
    {
        "urlParam": "ruby",
        "nameD": "Ruby"
    },
    {
        "urlParam": "runoff",
        "nameD": "RUNOFF"
    },
    {
        "urlParam": "rust",
        "nameD": "Rust"
    },
    {
        "urlParam": "sage",
        "nameD": "Sage"
    },
    {
        "urlParam": "saltstack",
        "nameD": "SaltStack"
    },
    {
        "urlParam": "sas",
        "nameD": "SAS"
    },
    {
        "urlParam": "sass",
        "nameD": "Sass"
    },
    {
        "urlParam": "scala",
        "nameD": "Scala"
    },
    {
        "urlParam": "scaml",
        "nameD": "Scaml"
    },
    {
        "urlParam": "scheme",
        "nameD": "Scheme"
    },
    {
        "urlParam": "scilab",
        "nameD": "Scilab"
    },
    {
        "urlParam": "scss",
        "nameD": "SCSS"
    },
    {
        "urlParam": "sed",
        "nameD": "sed"
    },
    {
        "urlParam": "self",
        "nameD": "Self"
    },
    {
        "urlParam": "shaderlab",
        "nameD": "ShaderLab"
    },
    {
        "urlParam": "shell",
        "nameD": "Shell"
    },
    {
        "urlParam": "shellsession",
        "nameD": "ShellSession"
    },
    {
        "urlParam": "shen",
        "nameD": "Shen"
    },
    {
        "urlParam": "slash",
        "nameD": "Slash"
    },
    {
        "urlParam": "slim",
        "nameD": "Slim"
    },
    {
        "urlParam": "smali",
        "nameD": "Smali"
    },
    {
        "urlParam": "smalltalk",
        "nameD": "Smalltalk"
    },
    {
        "urlParam": "smarty",
        "nameD": "Smarty"
    },
    {
        "urlParam": "smt",
        "nameD": "SMT"
    },
    {
        "urlParam": "solidity",
        "nameD": "Solidity"
    },
    {
        "urlParam": "sourcepawn",
        "nameD": "SourcePawn"
    },
    {
        "urlParam": "sparql",
        "nameD": "SPARQL"
    },
    {
        "urlParam": "spline-font-database",
        "nameD": "Spline Font Database"
    },
    {
        "urlParam": "sqf",
        "nameD": "SQF"
    },
    {
        "urlParam": "sql",
        "nameD": "SQL"
    },
    {
        "urlParam": "sqlpl",
        "nameD": "SQLPL"
    },
    {
        "urlParam": "squirrel",
        "nameD": "Squirrel"
    },
    {
        "urlParam": "srecode-template",
        "nameD": "SRecode Template"
    },
    {
        "urlParam": "stan",
        "nameD": "Stan"
    },
    {
        "urlParam": "standard-ml",
        "nameD": "Standard ML"
    },
    {
        "urlParam": "stata",
        "nameD": "Stata"
    },
    {
        "urlParam": "ston",
        "nameD": "STON"
    },
    {
        "urlParam": "stylus",
        "nameD": "Stylus"
    },
    {
        "urlParam": "sublime-text-config",
        "nameD": "Sublime Text Config"
    },
    {
        "urlParam": "subrip-text",
        "nameD": "SubRip Text"
    },
    {
        "urlParam": "sugarss",
        "nameD": "SugarSS"
    },
    {
        "urlParam": "supercollider",
        "nameD": "SuperCollider"
    },
    {
        "urlParam": "svg",
        "nameD": "SVG"
    },
    {
        "urlParam": "swift",
        "nameD": "Swift"
    },
    {
        "urlParam": "systemverilog",
        "nameD": "SystemVerilog"
    },
    {
        "urlParam": "tcl",
        "nameD": "Tcl"
    },
    {
        "urlParam": "tcsh",
        "nameD": "Tcsh"
    },
    {
        "urlParam": "tea",
        "nameD": "Tea"
    },
    {
        "urlParam": "terra",
        "nameD": "Terra"
    },
    {
        "urlParam": "tex",
        "nameD": "TeX"
    },
    {
        "urlParam": "text",
        "nameD": "Text"
    },
    {
        "urlParam": "textile",
        "nameD": "Textile"
    },
    {
        "urlParam": "thrift",
        "nameD": "Thrift"
    },
    {
        "urlParam": "ti-program",
        "nameD": "TI Program"
    },
    {
        "urlParam": "tla",
        "nameD": "TLA"
    },
    {
        "urlParam": "toml",
        "nameD": "TOML"
    },
    {
        "urlParam": "turing",
        "nameD": "Turing"
    },
    {
        "urlParam": "turtle",
        "nameD": "Turtle"
    },
    {
        "urlParam": "twig",
        "nameD": "Twig"
    },
    {
        "urlParam": "txl",
        "nameD": "TXL"
    },
    {
        "urlParam": "type-language",
        "nameD": "Type Language"
    },
    {
        "urlParam": "typescript",
        "nameD": "TypeScript"
    },
    {
        "urlParam": "unified-parallel-c",
        "nameD": "Unified Parallel C"
    },
    {
        "urlParam": "unity3d-asset",
        "nameD": "Unity3D Asset"
    },
    {
        "urlParam": "unix-assembly",
        "nameD": "Unix Assembly"
    },
    {
        "urlParam": "uno",
        "nameD": "Uno"
    },
    {
        "urlParam": "unrealscript",
        "nameD": "UnrealScript"
    },
    {
        "urlParam": "urweb",
        "nameD": "UrWeb"
    },
    {
        "urlParam": "vala",
        "nameD": "Vala"
    },
    {
        "urlParam": "vcl",
        "nameD": "VCL"
    },
    {
        "urlParam": "verilog",
        "nameD": "Verilog"
    },
    {
        "urlParam": "vhdl",
        "nameD": "VHDL"
    },
    {
        "urlParam": "vim-script",
        "nameD": "Vim script"
    },
    {
        "urlParam": "visual-basic",
        "nameD": "Visual Basic"
    },
    {
        "urlParam": "volt",
        "nameD": "Volt"
    },
    {
        "urlParam": "vue",
        "nameD": "Vue"
    },
    {
        "urlParam": "wavefront-material",
        "nameD": "Wavefront Material"
    },
    {
        "urlParam": "wavefront-object",
        "nameD": "Wavefront Object"
    },
    {
        "urlParam": "wdl",
        "nameD": "wdl"
    },
    {
        "urlParam": "web-ontology-language",
        "nameD": "Web Ontology Language"
    },
    {
        "urlParam": "webassembly",
        "nameD": "WebAssembly"
    },
    {
        "urlParam": "webidl",
        "nameD": "WebIDL"
    },
    {
        "urlParam": "wisp",
        "nameD": "wisp"
    },
    {
        "urlParam": "world-of-warcraft-addon-data",
        "nameD": "World of Warcraft Addon Data"
    },
    {
        "urlParam": "x10",
        "nameD": "X10"
    },
    {
        "urlParam": "xbase",
        "nameD": "xBase"
    },
    {
        "urlParam": "xc",
        "nameD": "XC"
    },
    {
        "urlParam": "xcompose",
        "nameD": "XCompose"
    },
    {
        "urlParam": "xml",
        "nameD": "XML"
    },
    {
        "urlParam": "xojo",
        "nameD": "Xojo"
    },
    {
        "urlParam": "xpages",
        "nameD": "XPages"
    },
    {
        "urlParam": "xpm",
        "nameD": "XPM"
    },
    {
        "urlParam": "xproc",
        "nameD": "XProc"
    },
    {
        "urlParam": "xquery",
        "nameD": "XQuery"
    },
    {
        "urlParam": "xs",
        "nameD": "XS"
    },
    {
        "urlParam": "xslt",
        "nameD": "XSLT"
    },
    {
        "urlParam": "xtend",
        "nameD": "Xtend"
    },
    {
        "urlParam": "yacc",
        "nameD": "Yacc"
    },
    {
        "urlParam": "yaml",
        "nameD": "YAML"
    },
    {
        "urlParam": "yang",
        "nameD": "YANG"
    },
    {
        "urlParam": "yara",
        "nameD": "YARA"
    },
    {
        "urlParam": "zephir",
        "nameD": "Zephir"
    },
    {
        "urlParam": "zimpl",
        "nameD": "Zimpl"
    }
];

// $('#lang-drop').empty();
$.each(langs, function (i, l) {
    $('#lang-drop').append($('<option></option>').val(l.urlParam).html(l.nameD));
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
    let apiLang = "";
    let apiSince = "";

    switch (type) {
        case 'repositories':

            apiType = "repositories";

            switch (lang) {
                case 'all':
                    apiLang = encodeURIComponent("?");
                    break;
                default:
                    apiLang = `${encodeURIComponent("?")}language=${lang}&`
            };

            switch (since) {
                case 'daily':
                    apiSince = "since=daily"
                    break;
                case 'weekly':
                    apiSince = "since=weekly"
                    break;
                case 'monthly':
                    apiSince = "since=monthly"
                    break;
                default: // Do nothing.
            };

            break;

        case 'developers':

            apiType = "developers";

            switch (lang) {
                case 'all':
                    apiLang = encodeURIComponent("?");
                    break;
                default:
                    apiLang = `${encodeURIComponent("?")}language=${lang}&`;
            };

            switch (since) {
                case 'daily':
                    apiSince = "since=daily"
                    break;
                case 'weekly':
                    apiSince = "since=weekly"
                    break;
                case 'monthly':
                    apiSince = "since=monthly"
                    break;
                default: // Do nothing.
            };

            break;

        default:
    };

    let ajaxURL;

    ajaxURL = `/api/${apiType}/${apiLang}/${apiSince}`;

    // console.log(ajaxURL);

    $.ajax({
        type: "GET",
        url: ajaxURL,
        success: function (response) {

            console.log(response);

            let trendingCol = document.createElement('div');
            trendingCol.setAttribute('class', 'trend-cont');

            Object.keys(response).forEach(key => {

                switch (apiType) {
                    case 'repositories':

                        let authorR = JSON.stringify(response[key].author).replace(/['"]+/g, '');
                        let avatarR = JSON.stringify(response[key].avatar);
                        let urlR = JSON.stringify(response[key].url).replace(/['"]+/g, '');
                        let descriptionR = JSON.stringify(response[key].description).replace(/['"]+/g, '');
                        let starsR = JSON.stringify(response[key].stars);
                        let forksR = JSON.stringify(response[key].forks).replace(/['"]+/g, '');
                        let langR;
                        let langColorR;

                        // Check if language & languageColor exists, act accordingly.
                        if (response[key].language) {
                            langR = JSON.stringify(response[key].language).replace(/['"]+/g, '');
                            langColorR = JSON.stringify(response[key].languageColor).replace(/['"]+/g, '');
                        } else {
                            langR = "Unknown";
                            langColorR = "#f25f4c"
                        }

                        // Check if description is empty, act accordingly.
                        if (response[key].description === "") {
                            descriptionR = "No description."
                        }

                        if (parseInt(key) < 25) {
                            trendingCol.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <p class="rank" style="float: right;">${++key}</p>
                                    <img src=${avatarR} loading="lazy" alt="GitHub repo image" width="40" height="40" class="trending-cards rounded">
                                    <h4 class="trending-cards text-limit">${authorR}</h4>
                                    <p id="card-info" class="trending-cards text-limit" title="${descriptionR}">${descriptionR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards link-icon"><img src="../images/star.svg" height="18" alt="Star icon"> ${starsR}</p>
                                    <p class="trending-cards link-icon"><img src="../images/fork.svg" height="18;" alt="Fork icon"> ${forksR}</p>
                                    <a class="trending-cards link-icon" href="${urlR}" target="_blank"><img src="../images/link.svg" height="18" alt="Link icon" style="float: right;"></a>
                                </div>`);
                        }

                        break;
                    case 'developers':
                        let usernameD = JSON.stringify(response[key].username).replace(/['"]+/g, '');
                        let nameD = JSON.stringify(response[key].name).replace(/['"]+/g, '');
                        let urlD = JSON.stringify(response[key].url).replace(/['"]+/g, '');
                        let avatarD = JSON.stringify(response[key].avatar);
                        let repoNameD = JSON.stringify(response[key].repo.name).replace(/['"]+/g, '');
                        let repoDescriptionD = JSON.stringify(response[key].repo.description).replace(/['"]+/g, '');
                        let repoUrlD = JSON.stringify(response[key].repo.url).replace(/['"]+/g, '');

                        // Check if repo.name is empty, act accordingly.
                        if (response[key].repo.name === "") {
                            repoNameD = "No repo name"
                        }

                        // Check if repo.description is empty, act accordingly.
                        if (response[key].repo.description === "") {
                            repoDescriptionD = "No description"
                        }

                        if (parseInt(key) < 24) {
                            trendingCol.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs rounded">
                                    <p class="rank" style="float: right;">${++key}</p>
                                    <img src=${avatarD} loading="lazy" alt="GitHub repo image" width="40" height="40" class="trending-cards rounded">
                                    <h4 class="trending-cards text-limit">${nameD}</h4>
                                    <a class="trending-cards" href="${urlD}" target="_blank">${usernameD}</a>
                                    <h4 class="trending-cards text-limit">${repoNameD}</h4>
                                    <p class="trending-cards text-limit" title="${repoDescriptionD}">${repoDescriptionD}</p>
                                    <a class="trending-cards text-limit" href="${repoUrlD}" target="_blank">Link</a>
                                </div>`);
                        }

                        break;
                    default:
                };

            });

            if (response.length === 0) {
                $('#sandbox').html(`<div class="text-center"><p class="mt-5 mb-0" style="font-weight: bold">&#128577 No repos/devs found.</p>`);
            } else {
                $('#sandbox').html(trendingCol);
            }

        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;

            //The message added to Response object in Controller can be retrieved as following.
            xhr.responseText;
        }
    });

};

// Call getTrending() when any select elements are changed.
$('.nav-item').on('change', function () {
    getTrending()
    // $('#navSelectDiv').collapse('hide');
});

// Start the API call on page load.
getTrending();