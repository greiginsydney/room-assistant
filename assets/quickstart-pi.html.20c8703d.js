import{r as i,o as r,c,a as s,b as a,w as l,F as p,d as e,e as n}from"./app.71086382.js";import{_ as u}from"./compilation-msgs.0e6a81b0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},m=e('<h1 id="raspberry-pi-3-or-4" tabindex="-1"><a class="header-anchor" href="#raspberry-pi-3-or-4" aria-hidden="true">#</a> Raspberry Pi 3 or 4</h1><p>This page will guide you through setting up a Raspberry Pi 3 or 4 to run room-assistant.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><h3 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware" aria-hidden="true">#</a> Hardware</h3><ul><li>Raspberry Pi 3 or 4 + Power Supply</li><li>Micro SD Card (ideally Application Class 1)</li><li>SD Card reader</li></ul><h3 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h3>',6),b={href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"},g=n("Raspberry Pi Imager"),_=s("h2",{id:"installing-raspbian",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installing-raspbian","aria-hidden":"true"},"#"),n(" Installing Raspbian")],-1),y=s("li",null,"Put your microSD card into your card reader.",-1),f=n("Open the "),k={href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"},w=n("Raspberry Pi Imager"),v=n(" and select the following options: "),x=s("ol",null,[s("li",null,"OS -> Raspberry Pi OS (other) -> Raspberry Pi OS (Lite)"),s("li",null,"SD Card -> the SD card you put into your card reader"),s("li",null,[n("Open the advanced options (Windows: "),s("em",null,"Ctrl + Shift + X"),n(", macOS: "),s("em",null,"Cmd + Shift + X"),n(") and enable SSH. Optionally, you can configure WiFi credentials, the hostname to be something recognizable like "),s("code",null,"bedroom"),n(` and more in this same menu. Hit "Save" on the bottom after you're done.`)])],-1),S=s("li",null,"Write the image to the card from the main menu. Wait for it to be finished before removing the card from the reader.",-1),C=s("li",null,"Insert the SD card into your Raspberry Pi, then connect the power supply. Wait a minute for it to boot and connect to your network.",-1),I=n("Open a SSH shell to "),P=s("code",null,"<hostname>.local",-1),R=n(" (default: "),T=s("code",null,"raspberrypi.local",-1),O=n(") with the user "),W=s("code",null,"pi",-1),D=n(" and the password you configured (default: "),q=s("code",null,"raspberry",-1),A=n("). On Windows you can use "),B={href:"https://www.putty.org",target:"_blank",rel:"noopener noreferrer"},L=n("Putty"),N=n(", with Linux and macOS you can just open the terminal and e.g. type "),E=s("code",null,"ssh pi@raspberrypi.local",-1),H=n(". If the hostname is not found, use the IP of the Pi instead - it can be found in your router administration panel."),j=e(`<h2 id="installing-room-assistant" tabindex="-1"><a class="header-anchor" href="#installing-room-assistant" aria-hidden="true">#</a> Installing room-assistant</h2><ol><li><p>Install NodeJS using the following commands.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -sL https://deb.nodesource.com/setup_16.x <span class="token operator">|</span> <span class="token function">sudo</span> -E <span class="token function">bash</span> -
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>We need to install some other dependencies as well, do so by running <code>sudo apt-get update &amp;&amp; sudo apt-get install build-essential libavahi-compat-libdnssd-dev libsystemd-dev bluetooth libbluetooth-dev libudev-dev libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev</code>.</p></li><li><p>Now let&#39;s get install room-assistant! Run <code>sudo npm i --global --unsafe-perm room-assistant</code>. You will see messages like the one shown below during the installation process. Don&#39;t worry about them - they&#39;re not errors!</p><p><img src="`+u+'" alt="compilation messages"></p></li><li><p><em>Optional:</em> If you want to run Bluetooth related integrations, you should also grant some additional permissions by executing the commands below.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> setcap cap_net_raw+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which node`<span class="token variable">)</span></span>\n<span class="token function">sudo</span> setcap cap_net_raw+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which hcitool`<span class="token variable">)</span></span>\n<span class="token function">sudo</span> setcap cap_net_admin+eip <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> readlink -f `which hciconfig`<span class="token variable">)</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="configuring-room-assistant" tabindex="-1"><a class="header-anchor" href="#configuring-room-assistant" aria-hidden="true">#</a> Configuring room-assistant</h2>',3),M=s("li",null,[s("p",null,[n("Create a config folder for room-assistant with "),s("code",null,"mkdir -p ~/room-assistant/config"),n(".")])],-1),V=n("Create a new config file with "),F=s("code",null,"nano ~/room-assistant/config/local.yml",-1),U=n(" and put your room-assistant configuration in it. The example below configures the "),$=n("Home Assistant Core"),Q=n(" and "),X=n("Bluetooth Classic"),Y=n(" integrations. If you want to use something else check out the "),z=s("a",{href:"/integrations"},"integrations",-1),G=n(" section."),J=e(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,1),K=s("li",null,[s("p",null,[n("Go to your room-assistant directory by executing "),s("code",null,"cd ~/room-assistant"),n(".")])],-1),Z=s("li",null,[s("p",null,[n("Run room-assistant by executing "),s("code",null,"room-assistant"),n(". Watch the logs - are all integrations are loaded correctly and is the MQTT connection succesful? The congratulations, you configured room-assistant correctly! \u{1F389} New entities should now be appearing under the MQTT integration in Home Assistant Core, which can be viewed in Settings > Integrations.")])],-1),ss=e(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When starting room-assistant you will see warnings about the Apple Bonjour compatibility layer of Avahi. These won&#39;t impact the functionality at all and can just be ignored.</p></div><h2 id="making-sure-it-always-runs" tabindex="-1"><a class="header-anchor" href="#making-sure-it-always-runs" aria-hidden="true">#</a> Making sure it always runs</h2><ol><li><p>If room-assistant is still running from the previous step, stop it by hitting Ctrl + C on your keyboard.</p></li><li><p>Create a file using <code>sudo nano /etc/systemd/system/room-assistant.service</code> with the following contents:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=room-assistant service

[Service]
Type=notify
ExecStart=/usr/bin/room-assistant
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Congratulations, you are done! \u{1F38A} You may check the status of the service at any time with <code>sudo systemctl status room-assistant</code>. room-assistant will now be started when the Pi boots.</p></li></ol>`,3);function ns(as,es){const t=i("ExternalLinkIcon"),o=i("RouterLink");return r(),c(p,null,[m,s("ul",null,[s("li",null,[s("a",b,[g,a(t)])])]),_,s("ol",null,[y,s("li",null,[f,s("a",k,[w,a(t)]),v,x]),S,C,s("li",null,[I,P,R,T,O,W,D,q,A,s("a",B,[L,a(t)]),N,E,H])]),j,s("ol",null,[M,s("li",null,[s("p",null,[V,F,U,a(o,{to:"/integrations/home-assistant.html"},{default:l(()=>[$]),_:1}),Q,a(o,{to:"/integrations/bluetooth-classic.html"},{default:l(()=>[X]),_:1}),Y,z,G]),J]),K,Z]),ss],64)}var ls=d(h,[["render",ns]]);export{ls as default};