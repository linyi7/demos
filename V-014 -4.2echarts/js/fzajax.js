(function() {
 
    var XHR = {
        createStandardXHR: function() {
            return new XMLHttpRequest();
        },
        createIEXHR: function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        createErrorXHR: function () {
            alert("Your browser does not support XMLHTTP.");
            return null;
        },
        createXHR: function() { //创建XMLHttpRequest对象
            var xhr = null;
            if (window.XMLHttpRequest) {
                this.createXHR = this.createStandardXHR; // Firefox, Opera 8.0+,Safari，IE7+
            } else {
                this.createXHR = this.createIEXHR; // IE5、IE6
            }
            try {
                xhr = this.createXHR();
            } catch (e) {
                this.createXHR = this.createErrorXHR;
                xhr = this.createXHR();
            }
            return xhr;
        },
        ajax: function(opts) {
            var xhr = this.createXHR(),
                ajaxMethod = (opts.type || "GET").toUpperCase(),
                isPost = ajaxMethod == "POST",
                data = this.param(opts.data),
                url = this.buildUrlParam(opts.url, data, isPost);
            xhr.open(ajaxMethod, url, opts.async == undefined ? true : opts.async);
            if (isPost) {
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if (opts.contentType) {
                xhr.setRequestHeader("Content-type", opts.contentType);
            }
            var stateChange = this.xhrStateChange;
            xhr.onreadystatechange = function() {
                stateChange(xhr, opts.success, opts.error);
            }
            xhr.send(isPost ? data : null);
        },
        buildUrlParam: function(url,data,isPost) {
            if (data && !isPost) {
                if (url.indexOf("?") < 0) {
                    url += "?" + data;
                } else {
                    url += "&" + data;
                }
            }
            return url;
        },
        param: function(data) {
            if (!data) {
                return null;
            }
 
            if (typeof data !== "object") {
                return data;
            }
            var postData = [];
            for (var key in data) {
                postData.push(key+"="+data[key]);
            }
 
            return postData.join("&");
        },
        xhrStateChange: function(xhr, successFn, failFn) {
            if (xhr.readyState == 4) { // 4 = "loaded"
                if (xhr.status == 200) { // 200 = OK
                    successFn(xhr.responseText);
                } else {
                    failFn.call(xhr, xhr.statusText, xhr.status);
                }
            } else {
                failFn.call(xhr, xhr.statusText, xhr.status);
            }
        }
    };
 
    window.ajax = function(opts) {
        XHR.ajax.call(XHR, opts);
    };
})();