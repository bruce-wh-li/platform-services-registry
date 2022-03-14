# ZAP Scanning Report


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 1 |
| Low | 4 |
| Informational | 6 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Content Security Policy (CSP) Header Not Set | Medium | 3 |
| Cookie with SameSite Attribute None | Low | 2 |
| Dangerous JS Functions | Low | 1 |
| Permissions Policy Header Not Set | Low | 5 |
| Timestamp Disclosure - Unix | Low | 56 |
| Base64 Disclosure | Informational | 2 |
| Content-Type Header Missing | Informational | 3 |
| Information Disclosure - Suspicious Comments | Informational | 2 |
| Modern Web Application | Informational | 4 |
| Non-Storable Content | Informational | 6 |
| Storable and Cacheable Content | Informational | 3 |




## Alert Detail



### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://registry.developer.gov.bc.ca
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/logo192.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 3

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy ](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ http://www.w3.org/TR/CSP/ ](http://www.w3.org/TR/CSP/)
* [ http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html ](http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html)
* [ http://www.html5rocks.com/en/tutorials/security/content-security-policy/ ](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
* [ http://caniuse.com/#feat=contentsecuritypolicy ](http://caniuse.com/#feat=contentsecuritypolicy)
* [ http://content-security-policy.com/ ](http://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Cookie with SameSite Attribute None ](https://www.zaproxy.org/docs/alerts/10054/)



##### Low (Medium)

### Description

A cookie has been set with its SameSite attribute set to "none", which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.

* URL: https://registry.developer.gov.bc.ca
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 2

### Solution

Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.

### Reference


* [ https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site ](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site)


#### CWE Id: [ 1275 ](https://cwe.mitre.org/data/definitions/1275.html)


#### WASC Id: 13

#### Source ID: 3

### [ Dangerous JS Functions ](https://www.zaproxy.org/docs/alerts/10110/)



##### Low (Low)

### Description

A dangerous JS function seems to be in use that would leave the site vulnerable.

* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `eval`

Instances: 1

### Solution

See the references for security advice on the use of these functions.

### Reference


* [ https://angular.io/guide/security ](https://angular.io/guide/security)


#### CWE Id: [ 749 ](https://cwe.mitre.org/data/definitions/749.html)


#### Source ID: 3

### [ Permissions Policy Header Not Set ](https://www.zaproxy.org/docs/alerts/10063/)



##### Low (Medium)

### Description

Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.

* URL: https://registry.developer.gov.bc.ca
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/logo192.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/static/js/main.ae213b64.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)
* [ https://developers.google.com/web/updates/2018/06/feature-policy ](https://developers.google.com/web/updates/2018/06/feature-policy)
* [ https://scotthelme.co.uk/a-new-security-header-feature-policy/ ](https://scotthelme.co.uk/a-new-security-header-feature-policy/)
* [ https://w3c.github.io/webappsec-feature-policy/ ](https://w3c.github.io/webappsec-feature-policy/)
* [ https://www.smashingmagazine.com/2018/12/feature-policy/ ](https://www.smashingmagazine.com/2018/12/feature-policy/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Timestamp Disclosure - Unix ](https://www.zaproxy.org/docs/alerts/10096/)



##### Low (Low)

### Description

A timestamp was disclosed by the application/web server - Unix

* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `001737214`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `0123456789`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1013904242`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741821`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741822`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741823`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1116352408`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `113926993`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1249150122`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1294757372`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1322822218`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1359893119`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1396182291`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1413257819`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1426881987`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `143694565`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `150054599`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1508970993`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1521486534`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1537002063`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1540483477`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1541459225`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1555081692`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `16711680`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1694076839`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1695183700`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1747873779`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1750603025`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1779033703`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1899447441`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1925078388`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1955562222`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1986661051`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1996064986`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `2024104815`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `210244248`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `24177077`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `264347078`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `275423344`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `310598401`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `338241895`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `430227734`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `506948616`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `528734635`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `604807628`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `607225278`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `659060556`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `666307205`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `704751109`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `770255983`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `773529912`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `812702999`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `883997877`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `914150663`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `958139571`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `961987163`

Instances: 56

### Solution

Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.

### Reference


* [ http://projects.webappsec.org/w/page/13246936/Information%20Leakage ](http://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Base64 Disclosure ](https://www.zaproxy.org/docs/alerts/10094/)



##### Informational (Medium)

### Description

Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).

* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
* URL: https://registry.developer.gov.bc.ca/static/js/main.ae213b64.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `ca/topic/featured/Service-Overview-for-BC-Government-Private-Cloud-as-a-ServiceOpenshift-4-Platform`

Instances: 2

### Solution

Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.

### Reference


* [ http://projects.webappsec.org/w/page/13246936/Information%20Leakage ](http://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Content-Type Header Missing ](https://www.zaproxy.org/docs/alerts/10019/)



##### Informational (Medium)

### Description

The Content-Type header was either missing or empty.

* URL: https://registry.developer.gov.bc.ca/favicon.ico
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/manifest.json
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: https://registry.developer.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 3

### Solution

Ensure each page is setting the specific and appropriate content-type value for the content being delivered.

### Reference


* [ http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx ](http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx)


#### CWE Id: [ 345 ](https://cwe.mitre.org/data/definitions/345.html)


#### WASC Id: 12

#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Low)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `bugs`
* URL: https://registry.developer.gov.bc.ca/static/js/main.ae213b64.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `bug`

Instances: 2

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Modern Web Application ](https://www.zaproxy.org/docs/alerts/10109/)



##### Informational (Medium)

### Description

The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.

* URL: https://registry.developer.gov.bc.ca
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script>!function(e){function r(r){for(var n,l,f=r[0],i=r[1],a=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var i=t[f];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=this.webpackJsonpweb=this.webpackJsonpweb||[],i=f.push.bind(f);f.push=r,f=f.slice();for(var a=0;a<f.length;a++)r(f[a]);var p=i;t()}([])</script>`
* URL: https://registry.developer.gov.bc.ca/logo192.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script>!function(e){function r(r){for(var n,l,f=r[0],i=r[1],a=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var i=t[f];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=this.webpackJsonpweb=this.webpackJsonpweb||[],i=f.push.bind(f);f.push=r,f=f.slice();for(var a=0;a<f.length;a++)r(f[a]);var p=i;t()}([])</script>`
* URL: https://registry.developer.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script>!function(e){function r(r){for(var n,l,f=r[0],i=r[1],a=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var i=t[f];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=this.webpackJsonpweb=this.webpackJsonpweb||[],i=f.push.bind(f);f.push=r,f=f.slice();for(var a=0;a<f.length;a++)r(f[a]);var p=i;t()}([])</script>`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script>`

Instances: 4

### Solution

This is an informational alert and so no changes are required.

### Reference




#### Source ID: 3

### [ Non-Storable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.

* URL: https://registry.developer.gov.bc.ca
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
* URL: https://registry.developer.gov.bc.ca/favicon.ico
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
* URL: https://registry.developer.gov.bc.ca/logo192.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
* URL: https://registry.developer.gov.bc.ca/manifest.json
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
* URL: https://registry.developer.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
* URL: https://registry.developer.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`

Instances: 6

### Solution

The content may be marked as storable by ensuring that the following conditions are satisfied:
The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)
The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)
The "no-store" cache directive must not appear in the request or response header fields
For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response
For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)
In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:
It must contain an "Expires" header field
It must contain a "max-age" response directive
For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive
It must contain a "Cache Control Extension" that allows it to be cached
It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   

### Reference


* [ https://tools.ietf.org/html/rfc7234 ](https://tools.ietf.org/html/rfc7234)
* [ https://tools.ietf.org/html/rfc7231 ](https://tools.ietf.org/html/rfc7231)
* [ http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234) ](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234))


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Storable and Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.

* URL: https://registry.developer.gov.bc.ca/static/css/2.8596d359.chunk.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
* URL: https://registry.developer.gov.bc.ca/static/js/2.2d7f4263.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
* URL: https://registry.developer.gov.bc.ca/static/js/main.ae213b64.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`

Instances: 3

### Solution

Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:
Cache-Control: no-cache, no-store, must-revalidate, private
Pragma: no-cache
Expires: 0
This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. 

### Reference


* [ https://tools.ietf.org/html/rfc7234 ](https://tools.ietf.org/html/rfc7234)
* [ https://tools.ietf.org/html/rfc7231 ](https://tools.ietf.org/html/rfc7231)
* [ http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234) ](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234))


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3


