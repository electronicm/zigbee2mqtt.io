"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49808],{24003:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>f});var i=o(57305);const a=(0,i.Lk)("h1",{id:"diyruz-diyruz-airsense",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#diyruz-diyruz-airsense"},[(0,i.Lk)("span",null,"DIYRuZ DIYRuZ_AirSense")])],-1),d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"DIYRuZ_AirSense")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Air quality sensor")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"co2, temperature, humidity, pressure, led_feedback, enable_abc, threshold1, threshold2, temperature_offset, humidity_offset, pressure_offset, linkquality")],-1),n=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_AirSense.png",alt:"DIYRuZ DIYRuZ_AirSense"})])],-1),l=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://modkam.ru/?p=1715" target="_blank" rel="noopener noreferrer">Air quality sensor</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3),h=(0,i.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="led-feedback-binary" tabindex="-1"><a class="header-anchor" href="#led-feedback-binary"><span>Led feedback (binary)</span></a></h3><p>Enable LEDs feedback. Value can be found in the published state on the <code>led_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led feedback is ON, if <code>OFF</code> OFF.</p><h3 id="enable-abc-binary" tabindex="-1"><a class="header-anchor" href="#enable-abc-binary"><span>Enable abc (binary)</span></a></h3><p>Enable ABC (Automatic Baseline Correction). Value can be found in the published state on the <code>enable_abc</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_abc&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_abc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable abc is ON, if <code>OFF</code> OFF.</p><h3 id="threshold1-numeric" tabindex="-1"><a class="header-anchor" href="#threshold1-numeric"><span>Threshold1 (numeric)</span></a></h3><p>Warning (LED2) CO2 level. Value can be found in the published state on the <code>threshold1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;threshold1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="threshold2-numeric" tabindex="-1"><a class="header-anchor" href="#threshold2-numeric"><span>Threshold2 (numeric)</span></a></h3><p>Critical (LED3) CO2 level. Value can be found in the published state on the <code>threshold2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;threshold2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="pressure-offset-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-offset-numeric"><span>Pressure offset (numeric)</span></a></h3><p>Adjust pressure. Value can be found in the published state on the <code>pressure_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pressure_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pressure_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-1000</code> and the maximum value is <code>1000</code>. The unit of this value is <code>hPa</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),p={},m=(0,o(36920).A)(p,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[d,(0,i.Lk)("tbody",null,[s,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,i.k6)((()=>[(0,i.eW)("DIYRuZ")])),_:1})])]),u,r,n])]),l,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),f=JSON.parse('{"path":"/devices/DIYRuZ_AirSense.html","title":"DIYRuZ DIYRuZ_AirSense control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ DIYRuZ_AirSense control via MQTT","description":"Integrate your DIYRuZ DIYRuZ_AirSense via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"Led feedback (binary)","slug":"led-feedback-binary","link":"#led-feedback-binary","children":[]},{"level":3,"title":"Enable abc (binary)","slug":"enable-abc-binary","link":"#enable-abc-binary","children":[]},{"level":3,"title":"Threshold1 (numeric)","slug":"threshold1-numeric","link":"#threshold1-numeric","children":[]},{"level":3,"title":"Threshold2 (numeric)","slug":"threshold2-numeric","link":"#threshold2-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Pressure offset (numeric)","slug":"pressure-offset-numeric","link":"#pressure-offset-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722886368000},"filePathRelative":"devices/DIYRuZ_AirSense.md"}')}}]);