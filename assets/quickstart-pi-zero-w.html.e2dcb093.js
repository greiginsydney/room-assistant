import{r as i,o as r,c,a as n,b as e,w as l,F as p,d as a,e as s}from"./app.71086382.js";import{_ as u}from"./compilation-msgs.0e6a81b0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},m=a('<h1 id="raspberry-pi-zero-w" tabindex="-1"><a class="header-anchor" href="#raspberry-pi-zero-w" aria-hidden="true">#</a> Raspberry Pi Zero W</h1><p>This page will guide you through setting up a Pi Zero W to run room-assistant.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><h3 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware" aria-hidden="true">#</a> Hardware</h3><ul><li>Raspberry Pi Zero W + Power Supply</li><li>Micro SD Card (ideally Application Class 1)</li><li>SD Card reader</li></ul><h3 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h3>',6),b={href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"},g=s("Raspberry Pi Imager"),_=n("h2",{id:"installing-raspbian",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installing-raspbian","aria-hidden":"true"},"#"),s(" Installing Raspbian")],-1),f=n("li",null,"Put your microSD card into your card reader.",-1),y=s("Open the "),k={href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"},w=s("Raspberry Pi Imager"),v=s(" and select the following options: "),S=n("ol",null,[n("li",null,"OS -> Raspberry Pi OS (other) -> Raspberry Pi OS (Lite)"),n("li",null,"SD Card -> the SD card you put into your card reader"),n("li",null,[s("Open the advanced options (Windows: "),n("em",null,"Ctrl + Shift + X"),s(", macOS: "),n("em",null,"Cmd + Shift + X"),s(") and enable SSH. Optionally, you can configure WiFi credentials, the hostname to be something recognizable like "),n("code",null,"bedroom"),s(` and more in this same menu. Hit "Save" on the bottom after you're done.`)])],-1),x=n("li",null,"Write the image to the card from the main menu. Wait for it to be finished before removing the card from the reader.",-1),C=n("li",null,"Insert the SD card into your Raspberry Pi Zero W, then connect the power supply. Wait a minute for it to boot and connect to your network.",-1),P=s("Open a SSH shell to "),T=n("code",null,"<hostname>.local",-1),W=s(" (default: "),R=n("code",null,"raspberrypi.local",-1),I=s(") with the user "),O=n("code",null,"pi",-1),A=s(" and the password you configured (default: "),q=n("code",null,"raspberry",-1),D=s("). On Windows you can use "),H={href:"https://www.putty.org",target:"_blank",rel:"noopener noreferrer"},N=s("Putty"),B=s(", with Linux and macOS you can just open the terminal and e.g. type "),L=n("code",null,"ssh pi@raspberrypi.local",-1),j=s(". If the hostname is not found, use the IP of the Pi instead - it can be found in your router administration panel."),E=a(`<h2 id="installing-room-assistant" tabindex="-1"><a class="header-anchor" href="#installing-room-assistant" aria-hidden="true">#</a> Installing room-assistant</h2><ol><li><p>Now we install NodeJS by running</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -O - https://gist.githubusercontent.com/mKeRix/88b7b81e9bca044f74de1dc51696efb2/raw/799a20bca44cc61d8f8ae93878f2f28af8365a69/getNodeLTS.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>To make the commands we install with npm available the $PATH environment variable needs to be extended as well. Edit the file <code>~/.profile</code> (e.g. with <code>nano ~/.profile</code>) and add the <code>PATH=&quot;$PATH:/opt/nodejs/bin&quot;</code> to the end of the file. Save, then run <code>source ~/.profile</code>.</p></li><li><p>We need to install some other dependencies as well, do so by running <code>sudo apt-get update &amp;&amp; sudo apt-get install build-essential libavahi-compat-libdnssd-dev libsystemd-dev bluetooth libbluetooth-dev libudev-dev libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev</code>.</p></li><li><p>Now let&#39;s get install room-assistant! Run <code>sudo npm i --global --unsafe-perm room-assistant</code>. You will see messages like the one shown below during the installation process. Don&#39;t worry about them - they&#39;re not errors!</p><p><img src="`+u+'" alt="compilation messages"></p></li><li><p><em>Optional:</em> If you want to run Bluetooth related integrations, you should also grant some additional permissions by executing the commands below.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> setcap cap_net_raw+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which node`<span class="token variable">)</span></span>\n<span class="token function">sudo</span> setcap cap_net_raw+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which hcitool`<span class="token variable">)</span></span>\n<span class="token function">sudo</span> setcap cap_net_admin+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which hciconfig`<span class="token variable">)</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="configuring-room-assistant" tabindex="-1"><a class="header-anchor" href="#configuring-room-assistant" aria-hidden="true">#</a> Configuring room-assistant</h2>',3),Z=n("li",null,[n("p",null,[s("Create a config folder for room-assistant with "),n("code",null,"mkdir -p ~/room-assistant/config"),s(".")])],-1),$=s("Create a new config file with "),M=n("code",null,"nano ~/room-assistant/config/local.yml",-1),V=s(" and put your room-assistant configuration in it. The example below configures the "),z=s("Home Assistant Core"),F=s(" and "),U=s("Bluetooth Classic"),Q=s(" integrations. If you want to use something else check out the "),X=n("a",{href:"/integrations"},"integrations",-1),Y=s(" section."),G=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">integrations</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> homeAssistant
    <span class="token punctuation">-</span> bluetoothClassic
<span class="token key atrule">homeAssistant</span><span class="token punctuation">:</span>
  <span class="token key atrule">mqttUrl</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://homeassistant.local:1883&#39;</span>
  <span class="token key atrule">mqttOptions</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> youruser
    <span class="token key atrule">password</span><span class="token punctuation">:</span> yourpass
<span class="token key atrule">bluetoothClassic</span><span class="token punctuation">:</span>
  <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> &lt;bluetooth<span class="token punctuation">-</span>mac<span class="token punctuation">-</span>of<span class="token punctuation">-</span>device<span class="token punctuation">-</span>to<span class="token punctuation">-</span>track<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,1),J=n("li",null,[n("p",null,[s("Go to your room-assistant directory by executing "),n("code",null,"cd ~/room-assistant"),s(".")])],-1),K=n("li",null,[n("p",null,[s("Run room-assistant by executing "),n("code",null,"room-assistant"),s(". Watch the logs - are all integrations are loaded correctly and is the MQTT connection succesful? Then congratulations, you configured room-assistant correctly! \u{1F389} New entities should now be appearing under the MQTT integration in Home Assistant Core, which can be viewed in Settings > Integrations.")])],-1),nn=a(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When starting room-assistant you will see warnings about the Apple Bonjour compatibility layer of Avahi. These won&#39;t impact the functionality at all and can just be ignored.</p></div><h2 id="making-sure-it-always-runs" tabindex="-1"><a class="header-anchor" href="#making-sure-it-always-runs" aria-hidden="true">#</a> Making sure it always runs</h2><ol><li><p>If room-assistant is still running from the previous step, stop it by hitting Ctrl + C on your keyboard.</p></li><li><p>Create a file using <code>sudo nano /etc/systemd/system/room-assistant.service</code> with the following contents:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=room-assistant service

[Service]
Type=notify
ExecStart=/opt/nodejs/bin/room-assistant
WorkingDirectory=/home/pi/room-assistant
TimeoutStartSec=120
TimeoutStopSec=30
Restart=always
RestartSec=10
WatchdogSec=60
User=pi

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>Enable and start your service by executing the commands below.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> room-assistant.service
<span class="token function">sudo</span> systemctl start room-assistant.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Congratulations, you are done! \u{1F38A} You may check the status of the service at any time with <code>sudo systemctl status room-assistant</code>. room-assistant will now be started when the Pi Zero W boots.</p></li></ol>`,3);function sn(en,an){const t=i("ExternalLinkIcon"),o=i("RouterLink");return r(),c(p,null,[m,n("ul",null,[n("li",null,[n("a",b,[g,e(t)])])]),_,n("ol",null,[f,n("li",null,[y,n("a",k,[w,e(t)]),v,S]),x,C,n("li",null,[P,T,W,R,I,O,A,q,D,n("a",H,[N,e(t)]),B,L,j])]),E,n("ol",null,[Z,n("li",null,[n("p",null,[$,M,V,e(o,{to:"/integrations/home-assistant.html"},{default:l(()=>[z]),_:1}),F,e(o,{to:"/integrations/bluetooth-classic.html"},{default:l(()=>[U]),_:1}),Q,X,Y]),G]),J,K]),nn],64)}var rn=d(h,[["render",sn]]);export{rn as default};