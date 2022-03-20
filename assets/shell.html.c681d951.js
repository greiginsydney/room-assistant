import{r as l,o,c as r,a as n,b as e,F as d,d as a,e as s}from"./app.71086382.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a('<h1 id="shell-commands" tabindex="-1"><a class="header-anchor" href="#shell-commands" aria-hidden="true">#</a> Shell Commands</h1><p><strong>Integration Key:</strong> <code>shell</code></p><p>The Shell integration allows you to execute any shell command on a schedule and use the output as the state of a sensor. This is useful for passing metrics about the machine that room-assistant is running on or for integrating sensors that do not have native support.</p><p>The commands are run with the same user that room-assistant is running with, so make sure your permissions are setup accordingly.</p><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>sensors</code></td><td><a href="#sensors">Shell Sensors</a></td><td></td><td>An array of shell sensor definitions.</td></tr><tr><td><code>switches</code></td><td><a href="#switches">Shell Switches</a></td><td></td><td>An array of shell switch definitions.</td></tr></tbody></table><h3 id="sensors" tabindex="-1"><a class="header-anchor" href="#sensors" aria-hidden="true">#</a> Sensors</h3>',7),p=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Description")])],-1),h=n("tr",null,[n("td",null,[n("code",null,"name")]),n("td",null,"String"),n("td"),n("td",null,"Friendly name of this sensor.")],-1),m=n("tr",null,[n("td",null,[n("code",null,"command")]),n("td",null,"String"),n("td"),n("td",null,"Shell command that should be executed.")],-1),b=n("tr",null,[n("td",null,[n("code",null,"regex")]),n("td",null,"String"),n("td"),n("td",null,"Regex that is used for parsing the stdout output of the command, if configured. Otherwise the complete output is used as the state.")],-1),k=n("td",null,[n("code",null,"cron")],-1),g=n("td",null,"String",-1),_=n("td",null,null,-1),f={href:"https://www.npmjs.com/package/node-cron#cron-syntax",target:"_blank",rel:"noopener noreferrer"},y=s("Cron pattern"),w=s(" describing the schedule that this command should be run with."),S=n("tr",null,[n("td",null,[n("code",null,"icon")]),n("td",null,"String"),n("td"),n("td",null,"Icon that the sensor should be represented with in Home Assistant Core.")],-1),x=n("tr",null,[n("td",null,[n("code",null,"unitOfMeasurement")]),n("td",null,"String"),n("td"),n("td",null,"Unit of measurement of the sensor state, leave empty if none.")],-1),v=n("td",null,[n("code",null,"deviceClass")],-1),C=n("td",null,"String",-1),D=n("td",null,null,-1),N=s("Home Assistant Core "),T={href:"https://www.home-assistant.io/integrations/sensor/#device-class",target:"_blank",rel:"noopener noreferrer"},A=s("device class"),B=s(" to be used for this sensor."),E=a(`<h3 id="switches" tabindex="-1"><a class="header-anchor" href="#switches" aria-hidden="true">#</a> Switches</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td><td></td><td>Friendly name of this switch.</td></tr><tr><td><code>onCommand</code></td><td>String</td><td></td><td>Shell command that should be executed when the switch is turned on.</td></tr><tr><td><code>offCommand</code></td><td>String</td><td></td><td>Shell command that should be executed when the switch is turned off.</td></tr><tr><td><code>icon</code></td><td>String</td><td></td><td>Icon that the sensor should be represented with in Home Assistant Core.</td></tr></tbody></table><details class="custom-container details"><summary>Example Config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">integrations</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> shell
<span class="token key atrule">shell</span><span class="token punctuation">:</span>
  <span class="token key atrule">sensors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Kitchen Wifi Strength
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&#39;iwconfig wlan0 | grep -i quality&#39;</span>
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;Signal level=(-?[0-9]+) dBm&#39;</span>
      <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;* * * * *&#39;</span>
      <span class="token key atrule">icon</span><span class="token punctuation">:</span> mdi<span class="token punctuation">:</span>wifi
      <span class="token key atrule">unitOfMeasurement</span><span class="token punctuation">:</span> dBm
      <span class="token key atrule">deviceClass</span><span class="token punctuation">:</span> signal_strength
  <span class="token key atrule">switches</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Onboard LED
      <span class="token key atrule">onCommand</span><span class="token punctuation">:</span> <span class="token string">&#39;echo mmc0 | sudo tee /sys/class/leds/led0/trigger&#39;</span>
      <span class="token key atrule">offCommand</span><span class="token punctuation">:</span> <span class="token string">&#39;echo none | sudo tee /sys/class/leds/led0/trigger &amp;&amp; echo 1 | sudo tee /sys/class/leds/led0/brightness&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>`,3);function I(F,O){const t=l("ExternalLinkIcon");return o(),r(d,null,[u,n("table",null,[p,n("tbody",null,[h,m,b,n("tr",null,[k,g,_,n("td",null,[n("a",f,[y,e(t)]),w])]),S,x,n("tr",null,[v,C,D,n("td",null,[N,n("a",T,[A,e(t)]),B])])])]),E],64)}var L=c(i,[["render",I]]);export{L as default};