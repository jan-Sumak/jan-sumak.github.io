<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Monaco; color: #14986a; -webkit-text-stroke: #14986a; background-color: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Monaco; color: #ffffff; -webkit-text-stroke: #ffffff; background-color: #000000}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Monaco; color: #ffffff; -webkit-text-stroke: #ffffff; background-color: #000000; min-height: 19.0px}
    span.s1 {font-kerning: none; color: #d41466; -webkit-text-stroke: 0px #d41466}
    span.s2 {font-kerning: none; color: #ffffff; -webkit-text-stroke: 0px #ffffff}
    span.s3 {font-kerning: none; color: #eb102f; -webkit-text-stroke: 0px #eb102f}
    span.s4 {font-kerning: none}
    span.s5 {font-kerning: none; color: #2781c9; -webkit-text-stroke: 0px #2781c9}
    span.s6 {font-kerning: none; color: #14986a; -webkit-text-stroke: 0px #14986a}
  </style>
</head>
<body>
<p class="p1"><span class="s1">document</span><span class="s2">.</span><span class="s3">addEventListener</span><span class="s2">(</span><span class="s4">'DOMContentLoaded'</span><span class="s2">, </span><span class="s5">function</span><span class="s2"> () {</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">    </span></span><span class="s5">const</span><span class="s4"> fontSwitch = </span><span class="s1">document</span><span class="s4">.</span><span class="s3">getElementById</span><span class="s4">(</span><span class="s6">'fontSwitch'</span><span class="s4">);</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">    </span></span><span class="s5">const</span><span class="s4"> fontSwitchableText = </span><span class="s1">document</span><span class="s4">.</span><span class="s3">querySelector</span><span class="s4">(</span><span class="s6">'.font-switchable-text'</span><span class="s4">);</span></p>
<p class="p3"><span class="s4"></span><br></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">    </span>fontSwitch.</span><span class="s3">addEventListener</span><span class="s4">(</span><span class="s6">'change'</span><span class="s4">, </span><span class="s5">function</span><span class="s4"> () {</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">        </span></span><span class="s5">if</span><span class="s4"> (fontSwitch.checked) {</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">            </span></span><span class="s1">document</span><span class="s4">.body.classList.</span><span class="s3">add</span><span class="s4">(</span><span class="s6">'font-switched-on'</span><span class="s4">);</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">        </span>} </span><span class="s5">else</span><span class="s4"> {</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">            </span></span><span class="s1">document</span><span class="s4">.body.classList.</span><span class="s3">remove</span><span class="s4">(</span><span class="s6">'font-switched-on'</span><span class="s4">);</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s4"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p2"><span class="s4">});</span></p>
</body>
</html>
