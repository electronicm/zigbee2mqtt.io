"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[343],{89317:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>_,data:()=>g});var d=o(57305);const i=(0,d.Lk)("h1",{id:"lytko-l101z-dln",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#lytko-l101z-dln"},[(0,d.Lk)("span",null,"Lytko L101Z-DLN")])],-1),a=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1),n=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"L101Z-DLN")],-1),c=(0,d.Lk)("td",null,"Vendor",-1),l=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Dual channel Zigbee thermostat without screen")],-1),s=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"climate (local_temperature, occupied_heating_setpoint, system_mode, running_mode, local_temperature_calibration), min_setpoint_deadband, sensor_type, target_temp_first, linkquality")],-1),u=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/L101Z-DLN.png",alt:"Lytko L101Z-DLN"})])],-1),p=(0,d.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,d.Lk)("span",null,"OTA updates")])],-1),r=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1),m=(0,d.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-l3-endpoint"><span>Climate (l3 endpoint)</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_l3&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration_l3&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="min-setpoint-deadband-numeric-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#min-setpoint-deadband-numeric-l3-endpoint"><span>Min setpoint deadband (numeric, l3 endpoint)</span></a></h3><p>Hysteresis setting. Value can be found in the published state on the <code>min_setpoint_deadband_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3</code>. The unit of this value is <code>C</code>.</p><h3 id="sensor-type-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#sensor-type-enum-l3-endpoint"><span>Sensor type (enum, l3 endpoint)</span></a></h3><p>Type of sensor. Sensor resistance value (kOhm). Value can be found in the published state on the <code>sensor_type_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_type_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_type_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>3.3</code>, <code>5</code>, <code>6.8</code>, <code>10</code>, <code>12</code>, <code>14.8</code>, <code>15</code>, <code>20</code>, <code>33</code>, <code>47</code>.</p><h3 id="target-temp-first-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#target-temp-first-binary-l3-endpoint"><span>Target temp first (binary, l3 endpoint)</span></a></h3><p>Display current temperature or target temperature. Value can be found in the published state on the <code>target_temp_first_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;target_temp_first_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;target_temp_first_l3&quot;: NEW_VALUE}</code>. If value equals <code>true</code> target temp first is ON, if <code>false</code> OFF.</p><h3 id="climate-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-l4-endpoint"><span>Climate (l4 endpoint)</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_l4&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_l4&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l4&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_l4&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_l4&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration_l4&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l4&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="min-setpoint-deadband-numeric-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#min-setpoint-deadband-numeric-l4-endpoint"><span>Min setpoint deadband (numeric, l4 endpoint)</span></a></h3><p>Hysteresis setting. Value can be found in the published state on the <code>min_setpoint_deadband_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_setpoint_deadband_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_setpoint_deadband_l4&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3</code>. The unit of this value is <code>C</code>.</p><h3 id="sensor-type-enum-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#sensor-type-enum-l4-endpoint"><span>Sensor type (enum, l4 endpoint)</span></a></h3><p>Type of sensor. Sensor resistance value (kOhm). Value can be found in the published state on the <code>sensor_type_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_type_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_type_l4&quot;: NEW_VALUE}</code>. The possible values are: <code>3.3</code>, <code>5</code>, <code>6.8</code>, <code>10</code>, <code>12</code>, <code>14.8</code>, <code>15</code>, <code>20</code>, <code>33</code>, <code>47</code>.</p><h3 id="target-temp-first-binary-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#target-temp-first-binary-l4-endpoint"><span>Target temp first (binary, l4 endpoint)</span></a></h3><p>Display current temperature or target temperature. Value can be found in the published state on the <code>target_temp_first_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;target_temp_first_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;target_temp_first_l4&quot;: NEW_VALUE}</code>. If value equals <code>true</code> target temp first is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),h={},_=(0,o(36920).A)(h,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[i,(0,d.Lk)("table",null,[a,(0,d.Lk)("tbody",null,[n,(0,d.Lk)("tr",null,[c,(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=Lytko"},{default:(0,d.k6)((()=>[(0,d.eW)("Lytko")])),_:1})])]),l,s,u])]),p,(0,d.Lk)("p",null,[(0,d.eW)("This device supports OTA updates, for more information see "),(0,d.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.k6)((()=>[(0,d.eW)("OTA updates")])),_:1}),(0,d.eW)(".")]),r,(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>[(0,d.eW)("How to use device type specific configuration")])),_:1})])]),m])}]]),g=JSON.parse('{"path":"/devices/L101Z-DLN.html","title":"Lytko L101Z-DLN control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lytko L101Z-DLN control via MQTT","description":"Integrate your Lytko L101Z-DLN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-01T13:40:11.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate (l3 endpoint)","slug":"climate-l3-endpoint","link":"#climate-l3-endpoint","children":[]},{"level":3,"title":"Min setpoint deadband (numeric, l3 endpoint)","slug":"min-setpoint-deadband-numeric-l3-endpoint","link":"#min-setpoint-deadband-numeric-l3-endpoint","children":[]},{"level":3,"title":"Sensor type (enum, l3 endpoint)","slug":"sensor-type-enum-l3-endpoint","link":"#sensor-type-enum-l3-endpoint","children":[]},{"level":3,"title":"Target temp first (binary, l3 endpoint)","slug":"target-temp-first-binary-l3-endpoint","link":"#target-temp-first-binary-l3-endpoint","children":[]},{"level":3,"title":"Climate (l4 endpoint)","slug":"climate-l4-endpoint","link":"#climate-l4-endpoint","children":[]},{"level":3,"title":"Min setpoint deadband (numeric, l4 endpoint)","slug":"min-setpoint-deadband-numeric-l4-endpoint","link":"#min-setpoint-deadband-numeric-l4-endpoint","children":[]},{"level":3,"title":"Sensor type (enum, l4 endpoint)","slug":"sensor-type-enum-l4-endpoint","link":"#sensor-type-enum-l4-endpoint","children":[]},{"level":3,"title":"Target temp first (binary, l4 endpoint)","slug":"target-temp-first-binary-l4-endpoint","link":"#target-temp-first-binary-l4-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722886368000},"filePathRelative":"devices/L101Z-DLN.md"}')}}]);