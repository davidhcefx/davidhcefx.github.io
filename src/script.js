// highlight.js CDN
const CDN_VER = '10.5.0';
const CDN = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${CDN_VER}`;

// Get libname if brush is not a default library, else return undefined
function getLibname(brush) {
  // Mapping generated by:
  // - https://gist.github.com/davidhcefx/74950e34dfb8a5cea38bf0212c144769
  return {
    '1c': '1c.js', 'abnf': 'abnf.js', 'accesslog': 'accesslog.js', 'actionscript': 'actionscript.js', 'as': 'actionscript.js', 'ada': 'ada.js', 'angelscript': 'angelscript.js', 'asc': 'angelscript.js', 'applescript': 'applescript.js', 'osascript': 'applescript.js', 'arcade': 'arcade.js', 'arduino': 'arduino.js', 'ino': 'arduino.js', 'armasm': 'armasm.js', 'arm': 'armasm.js', 'asciidoc': 'asciidoc.js', 'adoc': 'asciidoc.js', 'aspectj': 'aspectj.js', 'autohotkey': 'autohotkey.js', 'ahk': 'autohotkey.js', 'autoit': 'autoit.js', 'avrasm': 'avrasm.js', 'awk': 'awk.js', 'axapta': 'axapta.js', 'basic': 'basic.js', 'bnf': 'bnf.js', 'brainfuck': 'brainfuck.js', 'bf': 'brainfuck.js', 'cal': 'cal.js', 'capnproto': 'capnproto.js', 'capnp': 'capnproto.js', 'ceylon': 'ceylon.js', 'clean': 'clean.js', "clean','icl','dcl": 'clean.js', 'clojure-repl': 'clojure-repl.js', 'clojure': 'clojure.js', 'clj': 'clojure.js', 'cmake': 'cmake.js', 'cmake.in': 'cmake.js', 'coq': 'coq.js', 'cos': 'cos.js', '"cos"': 'cos.js', '"cls"': 'cos.js', 'crmsh': 'crmsh.js', 'crm': 'crmsh.js', 'pcmk': 'crmsh.js', 'crystal': 'crystal.js', 'cr': 'crystal.js', 'csp': 'csp.js', 'd': 'd.js', 'dart': 'dart.js', 'delphi': 'delphi.js', 'dpr': 'delphi.js', 'dfm': 'delphi.js', 'pas': 'delphi.js', 'pascal': 'delphi.js', 'freepascal': 'delphi.js', 'lazarus': 'delphi.js', 'lpr': 'delphi.js', 'lfm': 'delphi.js', 'django': 'django.js', 'jinja': 'django.js', 'dns': 'dns.js', 'bind': 'dns.js', 'zone': 'dns.js', 'dockerfile': 'dockerfile.js', 'docker': 'dockerfile.js', 'dos': 'dos.js', 'bat': 'dos.js', 'cmd': 'dos.js', 'dsconfig': 'dsconfig.js', 'dts': 'dts.js', 'dust': 'dust.js', 'dst': 'dust.js', 'ebnf': 'ebnf.js', 'elixir': 'elixir.js', 'elm': 'elm.js', 'erb': 'erb.js', 'erlang-repl': 'erlang-repl.js', 'erlang': 'erlang.js', 'erl': 'erlang.js', 'excel': 'excel.js', 'xlsx': 'excel.js', 'xls': 'excel.js', 'fix': 'fix.js', 'flix': 'flix.js', 'fortran': 'fortran.js', 'f90': 'fortran.js', 'f95': 'fortran.js', 'fsharp': 'fsharp.js', 'fs': 'fsharp.js', 'gams': 'gams.js', 'gms': 'gams.js', 'gauss': 'gauss.js', 'gss': 'gauss.js', 'gcode': 'gcode.js', 'nc': 'gcode.js', 'gherkin': 'gherkin.js', 'feature': 'gherkin.js', 'glsl': 'glsl.js', 'gml': 'gml.js', 'GML': 'gml.js', 'golo': 'golo.js', 'gradle': 'gradle.js', 'groovy': 'groovy.js', 'haml': 'haml.js', 'handlebars': 'handlebars.js', 'hbs': 'handlebars.js', 'html.hbs': 'handlebars.js', 'html.handlebars': 'handlebars.js', 'htmlbars': 'htmlbars.js', 'haskell': 'haskell.js', 'hs': 'haskell.js', 'haxe': 'haxe.js', 'hx': 'haxe.js', 'hsp': 'hsp.js', 'hy': 'hy.js', 'hylang': 'hy.js', 'inform7': 'inform7.js', 'i7': 'inform7.js', 'irpf90': 'irpf90.js', 'isbl': 'isbl.js', '"isbl"': 'isbl.js', 'jboss-cli': 'jboss-cli.js', 'wildfly-cli': 'jboss-cli.js', 'julia-repl': 'julia-repl.js', 'jldoctest': 'julia-repl.js', 'julia': 'julia.js', 'lasso': 'lasso.js', 'ls': 'livescript.js', 'lassoscript': 'lasso.js', 'latex': 'latex.js', 'tex': 'latex.js', 'ldif': 'ldif.js', 'leaf': 'leaf.js', 'lisp': 'lisp.js', 'livecodeserver': 'livecodeserver.js', 'livescript': 'livescript.js', 'llvm': 'llvm.js', 'lsl': 'lsl.js', 'mathematica': 'mathematica.js', 'mma': 'mathematica.js', 'wl': 'mathematica.js', 'matlab': 'matlab.js', 'maxima': 'maxima.js', 'mel': 'mel.js', 'mercury': 'mercury.js', 'm': 'mercury.js', 'moo': 'mercury.js', 'mipsasm': 'mipsasm.js', 'mips': 'mipsasm.js', 'mizar': 'mizar.js', 'mojolicious': 'mojolicious.js', 'monkey': 'monkey.js', 'moonscript': 'moonscript.js', 'moon': 'moonscript.js', 'n1ql': 'n1ql.js', 'nim': 'nim.js', 'nix': 'nix.js', '"nixos"': 'nix.js', 'nsis': 'nsis.js', 'ocaml': 'ocaml.js', 'ml': 'sml.js', 'openscad': 'openscad.js', 'scad': 'openscad.js', 'oxygene': 'oxygene.js', 'parser3': 'parser3.js', 'pf': 'pf.js', 'pf.conf': 'pf.js', 'pgsql': 'pgsql.js', "postgres','postgresql": 'pgsql.js', 'pony': 'pony.js', 'powershell': 'powershell.js', '"ps"': 'powershell.js', '"ps1"': 'powershell.js', 'processing': 'processing.js', 'profile': 'profile.js', 'prolog': 'prolog.js', 'protobuf': 'protobuf.js', 'puppet': 'puppet.js', 'pp': 'puppet.js', 'purebasic': 'purebasic.js', 'pb': 'purebasic.js', 'pbi': 'purebasic.js', 'q': 'q.js', 'k': 'q.js', 'kdb': 'q.js', 'qml': 'qml.js', 'qt': 'qml.js', 'r': 'r.js', 'reasonml': 'reasonml.js', 're': 'reasonml.js', 'rib': 'rib.js', 'roboconf': 'roboconf.js', 'graph': 'roboconf.js', 'instances': 'roboconf.js', 'routeros': 'routeros.js', 'mikrotik': 'routeros.js', 'rsl': 'rsl.js', 'ruleslanguage': 'ruleslanguage.js', 'sas': 'sas.js', 'SAS': 'sas.js', 'scala': 'scala.js', 'scheme': 'scheme.js', 'scilab': 'scilab.js', 'sci': 'scilab.js', 'smali': 'smali.js', 'smalltalk': 'smalltalk.js', 'st': 'smalltalk.js', 'sml': 'sml.js', 'sqf': 'sqf.js', 'stan': 'stan.js', 'stanfuncs': 'stan.js', 'stata': 'stata.js', 'do': 'stata.js', 'ado': 'stata.js', 'step21': 'step21.js', 'p21': 'step21.js', 'step': 'step21.js', 'stp': 'step21.js', 'stylus': 'stylus.js', 'styl': 'stylus.js', 'subunit': 'subunit.js', 'taggerscript': 'taggerscript.js', 'tap': 'tap.js', 'tcl': 'tcl.js', 'tk': 'tcl.js', 'thrift': 'thrift.js', 'tp': 'tp.js', 'twig': 'twig.js', 'craftcms': 'twig.js', 'vala': 'vala.js', 'vbnet': 'vbnet.js', 'vb': 'vbnet.js', 'vbscript-html': 'vbscript-html.js', 'vbscript': 'vbscript.js', 'vbs': 'vbscript.js', 'verilog': 'verilog.js', 'v': 'verilog.js', 'sv': 'verilog.js', 'svh': 'verilog.js', 'vhdl': 'vhdl.js', 'vim': 'vim.js', 'x86asm': 'x86asm.js', 'xl': 'xl.js', 'tao': 'xl.js', 'xquery': 'xquery.js', 'xpath': 'xquery.js', 'xq': 'xquery.js', 'zephir': 'zephir.js', 'zep': 'zephir.js',
  }[brush];
}

// Get dependency if found, else undefined
function getDependency(libname) {
  return {
    'arduino.js': ['cpp.js'], 'asciidoc.js': ['xml.js'], 'clojure-repl.js': ['clojure.js'], 'dart.js': ['markdown.js'], 'django.js': ['xml.js'], 'dockerfile.js': ['bash.js'], 'dust.js': ['xml.js'], 'erb.js': ['xml.js', 'ruby.js'], 'haml.js': ['ruby.js'], 'handlebars.js': ['xml.js'], 'htmlbars.js': ['xml.js'], 'julia-repl.js': ['julia.js'], 'mojolicious.js': ['xml.js', 'perl.js'], 'parser3.js': ['xml.js'], 'qml.js': ['javascript.js', 'xml.js'], 'tap.js': ['yaml.js'], 'twig.js': ['xml.js'], 'vbscript-html.js': ['xml.js', 'vbscript.js'],
  }[libname];
}

function jsToMinjs(url) {
  return url.replace(/.js$/, '.min.js');
}

function escapeTags(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Process code from highlight.js toy
function doHighlight() {
  const code = document.getElementById('hl-code').value;
  const brush = document.getElementById('hl-brush').value;
  const style = document.getElementById('hl-style').value || 'monokai-sublime';
  const libname = getLibname(brush);  // may be undefined
  const dependency = getDependency(libname);  // may be undefined
  let reminder = '';
  let html = `<html>
    <head><link rel="stylesheet" href="${CDN}/styles/${style}.min.css">
    <script src="${CDN}/highlight.min.js">\x3c/script>`;

  if (libname !== undefined) {  // not a default library
    reminder = `<p>※ Reminder: '${brush}' is not within the default
      <a href="https://highlightjs.org/download/">38 languages</a>
      contained in the prebuilt CDN.<br>Be sure to include
      <b>${libname}</b> if you are using highlight.js from CDN.`;
    html += `<script src="${CDN}/${jsToMinjs(libname)}">\x3c/script>`;

    if (dependency !== undefined) {
      const deps = `<b>${dependency.join('</b>, <b>')}</b>`;
      reminder += `<br>... as well as its dependencies ${deps}.`;
      dependency.forEach((dep) => {
        html += `<script src="${CDN}/${jsToMinjs(dep)}">\x3c/script>`;
      });
    }
    reminder += '</p>';
    document.getElementById('hl-reminder').innerHTML = reminder;
  }
  html += `<script>hljs.initHighlightingOnLoad();\x3c/script></head>
    <body><pre><code class="${brush}">${escapeTags(code)}</code></pre>
    \x3c/body>\x3c/html>`;

  const result = document.getElementById('highlight-result');
  result.hidden = false;
  result.srcdoc = html;
}
