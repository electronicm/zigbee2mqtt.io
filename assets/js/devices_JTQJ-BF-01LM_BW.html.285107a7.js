"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32465],{55253:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>g,data:()=>m});var s=i(57305);const a=(0,s.Lk)("h1",{id:"xiaomi-jtqj-bf-01lm-bw",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#xiaomi-jtqj-bf-01lm-bw"},[(0,s.Lk)("span",null,"Xiaomi JTQJ-BF-01LM/BW")])],-1),n=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1),l=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"JTQJ-BF-01LM/BW")],-1),o=(0,s.Lk)("td",null,"Vendor",-1),d=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Mijia Honeywell gas leak detector")],-1),r=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"gas, tamper, sensitivity, gas_density, selftest, linkquality")],-1),c=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/JTQJ-BF-01LM-BW.png",alt:"Xiaomi JTQJ-BF-01LM/BW"})])],-1),u=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"White-label"),(0,s.Lk)("td",null,"Xiaomi YTC4019RT")],-1),h=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Plug the device in and wait for around 5mins, while it performs its self-tests. A successful self-test is indicated by couple of beeps and a steady green led. Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity"><span>Sensitivity</span></a></h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="self-test" tabindex="-1"><a class="header-anchor" href="#self-test"><span>Self-test</span></a></h3><p>A self-test can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;selftest&quot;: &quot;&quot;}</code>. If the selftest is executed successfully you will hear the device beep in 30 seconds.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="gas-density-numeric" tabindex="-1"><a class="header-anchor" href="#gas-density-numeric"><span>Gas density (numeric)</span></a></h3><p>Value can be found in the published state on the <code>gas_density</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="selftest-enum" tabindex="-1"><a class="header-anchor" href="#selftest-enum"><span>Selftest (enum)</span></a></h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;selftest&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),p={},g=(0,i(36920).A)(p,[["render",function(e,t){const i=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[a,(0,s.Lk)("table",null,[n,(0,s.Lk)("tbody",null,[l,(0,s.Lk)("tr",null,[o,(0,s.Lk)("td",null,[(0,s.bF)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,s.k6)((()=>[(0,s.eW)("Xiaomi")])),_:1})])]),d,r,c,u])]),h])}]]),m=JSON.parse('{"path":"/devices/JTQJ-BF-01LM_BW.html","title":"Xiaomi JTQJ-BF-01LM/BW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi JTQJ-BF-01LM/BW control via MQTT","description":"Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Self-test","slug":"self-test","link":"#self-test","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Gas density (numeric)","slug":"gas-density-numeric","link":"#gas-density-numeric","children":[]},{"level":3,"title":"Selftest (enum)","slug":"selftest-enum","link":"#selftest-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722886368000},"filePathRelative":"devices/JTQJ-BF-01LM_BW.md"}')}}]);