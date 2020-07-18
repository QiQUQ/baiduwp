const error = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-112166098-2');
</script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>提示</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="https://pandl.live/">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="https://pandl.live/">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://pandownload.com/" target="_blank">网盘下载器</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.xiaocongjisuan.com/show/api/all/1" target="_blank">小葱计算</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.pandownload.com/donate.html">捐助</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const filebody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script src="https://cdn.staticfile.org/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }
  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<link href="https://cdn.staticfile.org/font-awesome/5.8.1/css/all.min.css" rel="stylesheet">
<title>文件列表</title>
<script>
  function dl(fs_id, timestamp, sign, randsk, share_id, uk) {
    var form = $('<form method="post" action="/download" target="_blank"></form>');
    form.append('<input type="hidden" name="fs_id" value="'+fs_id+'">');
    form.append('<input type="hidden" name="time" value="'+timestamp+'">');
    form.append('<input type="hidden" name="sign" value="'+sign+'">');
    form.append('<input type="hidden" name="randsk" value="'+randsk+'">');
    form.append('<input type="hidden" name="share_id" value="'+share_id+'">');
    form.append('<input type="hidden" name="uk" value="'+uk+'">');
    $(document.body).append(form);
    form.submit();
  }
  function getIconClass(filename){
    var filetype = {
      file_video: ["wmv", "rmvb", "mpeg4", "mpeg2", "flv", "avi", "3gp", "mpga", "qt", "rm", "wmz", "wmd", "wvx", "wmx", "wm", "mpg", "mp4", "mkv", "mpeg", "mov", "asf", "m4v", "m3u8", "swf"],
      file_audio: ["wma", "wav", "mp3", "aac", "ra", "ram", "mp2", "ogg", "aif", "mpega", "amr", "mid", "midi", "m4a", "flac"],
      file_image: ["jpg", "jpeg", "gif", "bmp", "png", "jpe", "cur", "svgz", "ico"],
      file_archive: ["rar", "zip", "7z", "iso"],
      windows: ["exe"],
      apple: ["ipa"],
      android: ["apk"],
      file_alt: ["txt", "rtf"],
      file_excel: ["xls", "xlsx"],
      file_word: ["doc", "docx"],
      file_powerpoint: ["ppt", "pptx"],
      file_pdf: ["pdf"],
    };
    var point = filename.lastIndexOf(".");
    var t = filename.substr(point+1);
    if (t == ""){
      return "";
    }
    t = t.toLowerCase();
    for(var icon in filetype) {
      for(var type in filetype[icon]) {
        if (t == filetype[icon][type])
        {
          return "fa-"+icon.replace('_', '-');
        }
      }
    }
    return "";
  }
  $(document).ready(function(){
    $(".fa-file").each(function(){
      var icon = getIconClass($(this).next().text());
      if (icon != "")
      {
        if (icon == "fa-windows" || icon == "fa-android" || icon == "fa-apple")
        {
          $(this).removeClass("far").addClass("fab");
        }
        $(this).removeClass("fa-file").addClass(icon);
      }
    });
  });
</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="https://pandl.live/">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">Pandownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="https://pandl.live/">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://pandownload.com/" target="_blank">网盘下载器</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.pandownload.com/donate.html">捐助</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<ol class="breadcrumb my-4">
文件列表 </ol>
<div>
<ul class="list-group ">`

const error_div = `</div>
</div>
</div>
<div style="display:none">
</div>
</body>
</html>`


const generate = async request => {
  const text = await request.formData()
  const surl = text.get('surl')
  const pwd = text.get('pwd')
  const headers = { 'Content-Type': 'text/html;charset=UTF-8' }
  const surl_1 = surl.substring(1)
  async function verifyPwd(surl,pwd){
    let formData1 = new FormData()
    formData1.append('pwd',pwd)
    const res = await fetch('https://pan.baidu.com/share/verify?channel=chunlei&clienttype=0&web=1&app_id=250528&surl='+surl_1,
    {
      body: formData1,
      method: 'POST',
      headers:{
        'user-agent':'netdisk',
        'Referer':'https://pan.baidu.com/disk/home'
      }
      }
      )
      const json1 = await res.json()
      if(json1.errno == 0){
        return json1.randsk
      }
      else {
        return 1
      }
      
      
  }
  async function getSign(surl,randsk){
    if(randsk == 1){
      return 1
    }
    const res1 = await fetch('https://pan.baidu.com/s/1'+surl,
    {
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=**INPUT YOUR BDUSS HERE**; '
            +  'STOKEN=**INPUT YOUR STOKEN HERE**; BDCLND=' + randsk
      }
    })
    const body = await res1.text()
    var re = /yunData.setData\(({.+)\);/
    if(body.match(re)){
      const json2 = JSON.parse(body.match(re)[1])
      return json2
    }
    else {
      return 1
    }
  }
  async function getFileList(shareid,uk,randsk){
    const res2 = await fetch('https://pan.baidu.com/share/list?app_id=250528&channel='
    + 'chunlei&clienttype=0&desc=0&num=100&order=name&page=1&root=1&shareid=' + shareid + '&showempty=0&uk='
    + uk + '&web=1',{
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=**INPUT YOUR BDUSS HERE**;'
            +  'STOKEN=**INPUT YOUR STOKEN HERE**; BDCLND=' + randsk
      }
    })
    const body = await res2.text()
    return JSON.parse(body)
  }
  const randsk = await verifyPwd(surl_1,pwd)
  const json2 = await getSign(surl_1,randsk)
  let filecontent = ``
  if(json2 != 1){
    const sign = json2.sign
    const timestamp = json2.timestamp
    const shareid = json2.shareid
    const uk = json2.uk 
    const filejson = await getFileList(shareid,uk,randsk)
    for(var i=0;i<filejson.list.length;i++){
      const file = filejson.list[i]
      if(file.isdir == 0){
filecontent += `<li class="list-group-item border-muted rounded text-muted py-2">
<i class="far fa-file mr-2"></i>
<a href="javascript:void(0)" onclick="dl('`+ file.fs_id + `',`+ timestamp +`,'`+ sign +`','` + randsk + `','`+shareid+`','`+ uk +`')">`+file.server_filename+`</a>
<span class="float-right">`+ file.size +`</span>
</li>`
      }
      else {
filecontent += `<li class="list-group-item border-muted rounded text-muted py-2">
<i class="far fa-folder mr-2"></i>
<a href="javascript:void(0)" onclick="Swal.fire('Sorry~','暂不支持文件夹下载','error')">`+file.server_filename+`</a>
<span class="float-right"></span>
</li>`
      }
      
    }
    let filefoot = `</ul>
</div>
</div>
</body>
</html>`
    return new Response(filebody+filecontent+filefoot, { headers })
  }
  else{
    return new Response(error + `
      <div class="alert alert-danger" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">提取码错误或文件失效</p>
</div>` + error_div, { headers })
    
  }

}
const landing = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-112166098-2');
</script>
<style>
body {
background-image: url("https://pandownload.com/img/baiduwp/bg.png");
}

.logo-img {
width: 1.1em;
position: relative;
top: -3px;
}
</style>
<title>PanDownload网页版</title>
<style>
.form-inline input {
width: 500px;
}

.input-card {
position: relative;
top: 7.0em;
}

.card-header {
height: 3.2em;
font-size: 20px;
line-height: 2.0em;
}

form input,
form button {
height: 3em;
}
</style>
<script>
function validateForm() {
var link = document.forms["form1"]["surl"].value;
if (link == null || link == "") {
document.forms["form1"]["surl"].focus();
return false;
}
var uk = link.match(/uk=(\d+)/);
var shareid = link.match(/shareid=(\d+)/);
if (uk != null && shareid != null) {
document.forms["form1"]["surl"].value = "";
$("form").append('<input type="hidden" name="uk" value="' + uk[1] + '">');
$("form").append('<input type="hidden" name="shareid" value="' + shareid[1] + '">');
return true;
}
var surl = link.match(/surl=([A-Za-z0-9-_]+)/);
if (surl == null) {
surl = link.match(/1[A-Za-z0-9-_]+/);
if (surl == null) {
document.forms["form1"]["surl"].focus();
return false;
}
else {
surl = surl[0];
}
}
else {
surl = "1" + surl[1];
}
document.forms["form1"]["surl"].value = surl;
return true;
}
</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="https://pandl.live/">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="https://pandl.live/">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://pandownload.com/" target="_blank">网盘下载器</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="col-lg-6 col-md-9 mx-auto mb-5 input-card">
<div class="card">
<div class="card-header bg-dark text-light">分享链接在线解析</div>
<div class="card-body">
<form name="form1" method="post" action="./" onsubmit="return validateForm()">
<div class="form-group my-2">
<input type="text" class="form-control" name="surl" placeholder="分享链接">
</div>
<div class="form-group my-4">
<input type="text" class="form-control" name="pwd" placeholder="提取码">
</div>
<button type="submit" class="mt-4 mb-3 form-control btn btn-success btn-block">打开</button>
</form>
</div>
</div>
</div>
</div>
<div style="display:none">
</div>
</body>
</html>
`
const helpbody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-112166098-2');
</script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>下载链接使用方法</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="https://pandl.live/">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="https://pandl.live/">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://pandownload.com/" target="_blank">网盘下载器</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.xiaocongjisuan.com/show/api/all/1" target="_blank">小葱计算</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.pandownload.com/donate.html">捐助</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const dbody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-112166098-2');
</script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>提示</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="https://pandl.live/">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="https://pandl.live/">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://pandownload.com/" target="_blank">网盘下载器</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.xiaocongjisuan.com/show/api/all/1" target="_blank">小葱计算</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://www.pandownload.com/donate.html">捐助</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const dfooter = `
</div>
</div>
</div>
</body>
</html>`



const download = async request => {
  const form2 = await request.formData()
  const fs_id = form2.get('fs_id')
  const timestamp = form2.get('time')
  const sign = form2.get('sign')
  const randsk = form2.get('randsk')
  const share_id = form2.get('share_id')
  const uk = form2.get('uk')
  async function getDlink(fs_id,timestamp,sign,randsk,share_id,uk){
    var formData2 = new FormData()
    formData2.append('encrypt',0)
    formData2.append('extra','{"sekey":"'+decodeURIComponent(randsk)+'"}')
    formData2.append('fid_list','['+fs_id+']')
    formData2.append('primaryid',share_id)
    formData2.append('uk',uk)
    formData2.append('product','share')
    formData2.append('type','nolimit')
    const res3 = await fetch('https://pan.baidu.com/api/sharedownload?app_id=250528&channel=chunlei&clienttype=12&sign='+sign+'&timestamp='+timestamp+'&web=1',{
      body:formData2,
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=**INPUT YOUR BDUSS HERE**;'
            +  'STOKEN=**INPUT YOUR STOKEN HERE**; BDCLND=' + randsk
      },
      method:'POST'
      }
    )
    return JSON.parse(await res3.text())
  }
  const json3 = await getDlink(fs_id,timestamp,sign,randsk,share_id,uk)
  let dresult = ``
  if(json3.errno == 0){
  const dlink = json3.list[0].dlink
  const getRealLink = await fetch(dlink,{
    headers:{
      'user-agent': 'LogStatistic',
      'Cookie': 'BDUSS==**INPUT YOUR SVIP BDUSS HERE**;'
    },
    redirect:"manual"
  })

  const realLink = await getRealLink.headers.get('Location').substring(7)
  dresult += `<div class="alert alert-primary" role="alert">
<h5 class="alert-heading">获取下载链接成功</h5>
<hr>
<p class="card-text"><a href="http://`+realLink+`" onclick= target=_blank>下载链接(http)</a> <a href="https://`+realLink+`" target=_blank>下载链接(https)</a><br><br><a>推送到Aria2(即将支持)</a><br><br><a href="./help">下载链接使用方法（必读）</a></p>
</div>`
  }
  else{
      dresult += `<div class="alert alert-danger" role="alert">
<h5 class="alert-heading">获取下载链接失败</h5>
<hr>
<p class="card-text">未知错误</p>
</div>`
  }

  return new Response(dbody+dresult+dfooter, { headers: {'Content-Type': 'text/html;charset=UTF-8'} })
}
async function handleRequest(request) {
  let response
  const { url } = request
  if (request.method === 'POST') {
    if(url.includes('download')){
      response = await download(request)
    }
    else{
      response = await generate(request)
    }
    
  } else {
    if(url.includes('help')){
      response = new Response(helpbody+`
      <div class="alert alert-primary" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">因百度限制，需修改浏览器UA后下载。<br>
<div class="page-inner">
<section class="normal" id="section-">
<h4>IDM（推荐）</h4>
<ol>
<li>选项 -> 下载 -> 手动添加任务时使用的用户代理（UA）-> 填入 <b>LogStatistic</b></li>
<li>右键复制下载链接，在 IDM 新建任务，粘贴链接即可下载。</li>
</ol>
<h4>Chrome浏览器</h4>
<ol>
<li>安装浏览器扩展程序 <a href="https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg" target="_blank">User-Agent Switcher for Chrome</a></li>
<li>右键点击扩展图标 -> 选项</li>
<li>New User-agent name 填入 百度网盘分享下载</li>
<li>New User-Agent String 填入 LogStatistic</li>
<li>Group 填入 百度网盘</li>
<li>Append? 选择 Replace</li>
<li>Indicator Flag 填入 Log，点击 Add 保存</li>
<li>保存后点击扩展图标，出现"百度网盘"，进入并选择"百度网盘分享下载"。</li>
</ol>
<blockquote>
<p>Chrome应用商店打不开或者其他Chromium内核的浏览器，<a href="http://pandownload.com/static/user_agent_switcher_1_0_43_0.crx" target="_blank">请点此下载</a></p>
<p><a href="https://appcenter.browser.qq.com/search/detail?key=User-Agent%20Switcher%20for%20Chrome&amp;id=djflhoibgkdhkhhcedjiklpkjnoahfmg%20&amp;title=User-Agent%20Switcher%20for%20Chrome" target="_blank">QQ浏览器插件下载</a></p>
</blockquote>
<h4>Pure浏览器（Android）</h4>
<ol>
<li>设置 –&gt; 浏览设置 -&gt; 浏览器标识(UA)</li>
<li>添加自定义UA：LogStatistic</li>
</ol>
<h4>Alook浏览器（IOS）</h4>
<ol>
<li>设置 -&gt; 通用设置 -&gt; 浏览器标识 -&gt; 移动版浏览器标识 -&gt; 自定义 -><br> 填入 <b>LogStatistic</b></li>
</ol>
</section>
</div>
</p>
</div>
      `+dfooter, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
    else{
    response = new Response(landing, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
  }
  return response
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
