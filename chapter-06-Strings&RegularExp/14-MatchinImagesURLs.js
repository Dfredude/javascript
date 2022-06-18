let html = `<!DOCTYPE html>

<!-- Language Style Setting according to query -->

    
    <html lang="en">
    



<head>
    
    
    
    

    
    
    
    
    
    
    <link rel="canonical" href="https://developer.samsung.com/SmartTV/develop/develop/guides/fundamentals/configuring-tv-applications.html" />

    <meta charset="utf-8">
<!-- <title>Samsung Developers</title> -->
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="theme-color" content="#000000">
<meta name="csrf-token" content="">


<link rel="manifest" href="/manifest.json">

<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungOne-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungOne-700.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungSharpSans-Bold.woff" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungSharpSans-Medium.woff" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungOneKorean-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungOneKorean-700.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/SamsungSharpSans-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://d3unf4s5rp9dfh.cloudfront.net/public/fonts/ArialMT.woff2" as="font" type="font/woff2" crossorigin="anonymous">


<link rel="icon" type="image/png" href="https://d3unf4s5rp9dfh.cloudfront.net/symbol_developers.ico">



<link rel="stylesheet" href="/css/sdp.vendors.css?v=202206182220">
<link rel="stylesheet" href="/css/sdp.global.css?v=202206182220">
<link rel="stylesheet" href="/css/sdp.app.css?v=202206182220">
<link rel="stylesheet" href="/css/docs_mkdown.css?v=202206182220">
<link rel="stylesheet" href="/css/custom.min.css?v=202206182220">

<script type="text/javascript" src="/js/sdp.vendors.min.js?v=202206182220"></script>





  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(
  {'gtm.start': new Date().getTime(),event:'gtm.js'}
  );var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-THSQV3D');</script>
  <!-- End Google Tag Manager -->




    <script src="https://d3unf4s5rp9dfh.cloudfront.net/public/js/lib/mermaid.min.js"></script>

    

    
    
    
    <title>Configuring TV Applications | Samsung Developers</title>
     
    
    <meta name="description" content="The world runs on you.">
    <meta name="author" content="">

    <!-- Open Graph tags  -->
    <meta property="og:site_name" content="Samsung Developers">
    <meta property="og:title"
        content="Smart TV |  Samsung Developers">
    <meta property="og:description" content="The world runs on you.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://developer.samsung.com/SmartTV/develop/develop/guides/fundamentals/configuring-tv-applications.html">
    <meta property="og:locale" content="en_US">
    <meta property="og:image" content="https://d3unf4s5rp9dfh.cloudfront.net/SDP/SNS_1280x630.jpg">

    <!-- Twitter card tags  -->
    <meta name="twitter:site" content="@samsung_dev">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Smart TV |  Samsung Developers">
    <meta name="twitter:description" content="The world runs on you.">
    <meta name="twitter:domain" content="http://developer.samsung.com/">
    <meta name="twitter:image" content="https://d3unf4s5rp9dfh.cloudfront.net/SDP/SNS_1280x630.jpg">
</head>

<body>

    


<!-- Google Tag Manager (noscript) for Samsung -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THSQV3D" height="0"
                width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->



    <div id="app" 
        data-type="doc" 
        data-secure="public"
        data-product-root="/smarttv"
        data-secure-timeout="3600000"
        data-static-root="smarttv/develop"
        data-has-session="false">
        <div class="wrapper">
            <header class="sdp-header" id="el-sdp-header" data-component="true">
    <div class="inner-wrap">
        <nav class="navbar-wrap fixed-top">
            <div class="bg-header bg-header-cover"></div>
            <div class="navbar navbar-expand-md">
                <div class="sdp-logo">
                    <a class="link-logo" href="/" title="Samsung Developers">
                        <span>
                            <i class="s-ico s-ico-logo-w"></i>
                        </span>
                    </a>
                </div>

                <button id="toggle-mobile-gnb" class="btn toggle-mobile-menu" type="button" data-toggle="collapse" aria-controls="mobile navbar collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-box">
                        <i></i>
                    </span>
                    <em class="sr-only">Toggle navigation</em>
                </button>

                <!-- mobile / global-Search-button -->
                <button type="button" class="btn btn-global-search is-mobile" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Global Search</span>
                    <span class="i-box">
                        <i class="s-ico s-ico-schzoom-black"></i>
                        <i class="icon-close"><i></i></i>
                    </span>
                </button>

                <div class="hd-collapse navbar-collapse" id="global-nav-collapse">
                    <div id="nav-gnb" class="gnb main-nav">
                        <ul class="navbar-nav navbar-depth1">
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/learn"><span>Learn</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 navbar-depth2-row">
                                        
                                        <li class="nav-item">
                                            <a href="/codelab" class="nav-link depth2-link"><span>Code Lab</span></a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="/foldables-and-largescreens" class="nav-link depth2-link"><span>Foldables and Large Screens</span></a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="/one-ui-beta" class="nav-link depth2-link"><span>One UI Beta</span></a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a href="/developers-podcast" class="nav-link depth2-link"><span>Samsung Developers Podcasts</span></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/develop"><span>Develop</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 sm-col-3">
                                        <li class="nav-item">
                                            <a class="nav-link depth2-link depth2-header no-link"><span><span>Mobile</span></span></a>
                                        </li>
                                        
                                            <li class="nav-item">
                                                <a href="/galaxy-gamedev" class="nav-link depth2-link depth2-clindren "><span><span>Galaxy GameDev</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/galaxy-themes" class="nav-link depth2-link depth2-clindren "><span><span>Galaxy Themes</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/galaxy-watch" class="nav-link depth2-link depth2-clindren "><span><span>Galaxy Watch</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/health" class="nav-link depth2-link depth2-clindren "><span><span>Health</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/blockchain" class="nav-link depth2-link depth2-clindren "><span><span>Samsung Blockchain</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/samsung-dex" class="nav-link depth2-link depth2-clindren "><span><span>Samsung DeX</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/iap" class="nav-link depth2-link depth2-clindren "><span><span>Samsung IAP</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/internet" class="nav-link depth2-link depth2-clindren "><span><span>Samsung Internet</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/pay" class="nav-link depth2-link depth2-clindren "><span><span>Samsung Pay</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/mobile" class="nav-link depth2-link depth2-clindren nav-arrow"><span><span>View All</span></span></a>
                                            </li>
                                        
                                    </ul>
                                    <ul class="navbar-nav navbar-depth2 sm-col-3">
                                        <li class="nav-item">
                                            <a class="nav-link depth2-link depth2-header no-link"><span><span>Visual Display</span></span></a>
                                        </li>
                                        
                                            <li class="nav-item">
                                                <a href="/smarttv/develop" class="nav-link depth2-link depth2-clindren"><span><span>Smart TV</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/signage" class="nav-link depth2-link depth2-clindren"><span><span>Smart Signage</span></span></a>
                                            </li>
                                         
                                    </ul>
                                    <ul class="navbar-nav navbar-depth2 sm-col-3">
                                        <li class="nav-item">
                                            <a class="nav-link depth2-link depth2-header no-link"><span><span>Digital Appliance</span></span></a>
                                        </li>
                                        
                                            <li class="nav-item">
                                                <a href="/family-hub" class="nav-link depth2-link depth2-clindren"><span><span>Family Hub</span></span></a>
                                            </li>
                                         
                                    </ul>
                                    <ul class="navbar-nav navbar-depth2 sm-col-3">
                                        <li class="nav-item">
                                            <a class="nav-link depth2-link depth2-header no-link"><span><span>Platform</span></span></a>
                                        </li>
                                        
                                            <li class="nav-item">
                                                <a href="/bixby" class="nav-link depth2-link depth2-clindren"><span><span>Bixby</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/knox" class="nav-link depth2-link depth2-clindren"><span><span>Knox</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/smartthings" class="nav-link depth2-link depth2-clindren"><span><span>SmartThings</span></span></a>
                                            </li>
                                        
                                            <li class="nav-item">
                                                <a href="/tizen" class="nav-link depth2-link depth2-clindren"><span><span>Tizen.NET</span></span></a>
                                            </li>
                                         
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/design"><span>Design</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 navbar-depth2-row">
                                    
                                        <li class="nav-item">
                                            <a href="/design-system" class="nav-link depth2-link"><span>Design System</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/one-ui" class="nav-link depth2-link"><span>One UI</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/one-ui-watch" class="nav-link depth2-link"><span>One UI Watch</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/smarttv/design" class="nav-link depth2-link"><span>Smart TV</span></a>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/distribute"><span>Distribute</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 navbar-depth2-row">
                                    
                                        <li class="nav-item">
                                            <a href="/galaxy-store" class="nav-link depth2-link"><span>Galaxy Store</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/galaxy-games" class="nav-link depth2-link"><span>Galaxy Store Games</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/podcasts" class="nav-link depth2-link"><span>Samsung Podcasts</span></a>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/support"><span>Support</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 navbar-depth2-row">
                                    
                                        <li class="nav-item">
                                            <a href="/dev-support" class="nav-link depth2-link"><span>Developer Support</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/remote-test-lab" class="nav-link depth2-link"><span>Remote Test Lab</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/issues-and-bugs" class="nav-link depth2-link"><span>Issues and Bugs Channel</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/android-usb-driver" class="nav-link depth2-link"><span>Samsung Android USB Driver</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/galaxy-emulator-skin" class="nav-link depth2-link"><span>Galaxy Emulator Skin</span></a>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/connect"><span>Connect</span></a>
                                <div class="navbar-depth2-wrap">
                                    <ul class="navbar-nav navbar-depth2 navbar-depth2-row">
                                    
                                        <li class="nav-item">
                                            <a href="/blog" class="nav-link depth2-link"><span>Blog</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/news" class="nav-link depth2-link"><span>News</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="https://forum.developer.samsung.com" class="nav-link depth2-link"><span>Forums</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/events" class="nav-link depth2-link"><span>Events</span></a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="/conference" class="nav-link depth2-link"><span>Samsung Developer Conference</span></a>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="common-menu main-nav">
                        <ul class="navbar-nav navbar-depth1">
                            <li class="nav-item nav-item-search">
                                <button type="button" class="btn btn-global-search" aria-haspopup="true" aria-expanded="false">
                                    <span class="sr-only">Global Search</span>
                                    <span class="i-box">
                                        <i class="s-ico s-ico-schzoom-black"></i>
                                        <i class="icon-close"><i></i></i>
                                    </span>
                                </button>
                            </li>

                            <!-- before login -->
                            
                            <li class="nav-item">
                                <button class="toggle-submenu"></button>
                                <a class="nav-link depth1-link" href="/login"><span>Sign In</span></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Global Search  -->
        <div id="modal-global-top-search" class="common-modal modal-global-top-search" tabindex="-1" aria-labelledby="modal-search-collapse">
            <div class="inner-modal">
                <!-- close Button -->
                <button type="button" class="btn btn-close-modal" data-dismiss="modal" aria-label="Close">
                    <span class="i-box">
                        <i class="icon-close"><i></i></i>
                    </span>
                </button>

                <div class="modal-content">
                    <div class="modal-body">
                        <div class="sdp-search-form-wrap">
                            <form id="global-sdp-search-form" method="GET" action="/search">
                                <fieldset class="sdp-search-field">
                                    <legend class="sr-only">Top Global Search Form</legend>

                                    <div class="input-group sdp-input-group-search">
                                        <label for="global-sdp-form-search-field" class="sr-only">Search</label>
                                        <input name="query" id="global-sdp-form-search-field" class="form-control" type="text" aria-label="search..." placeholder="Search" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-owns="quick search form">
                                        <input type="hidden" name="type" value="all">
                                        <input type="hidden" name="category" value="all">
                                        <button type="submit" class="btn btn-submit" aria-label="search" title="search">
                                            <span class="sr-only">Submit</span>
                                            <span class="prepend-icon"><i class="s-ico s-ico-schzoom-black"></i></span>
                                        </button>
                                    </div>
                                </fieldset>
                            </form>

                            <div id="global-sdp-search-result" class="sdp-search-result-section">
                                <div class="inner-result-sec">
                                    <div class="inner-scroll">
                                        <!-- Recommendation list -->
                                        <span class="sdp-search-result-title">Recommendation</span>
                                        <ul class="sdp-search-result sch-recommend" role="listbox">
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Design Competition 2018</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Galaxy Camera SDK</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Galaxy App Publishing</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Galaxy App Publishing 1</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Mobile</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Mobile1</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Mobile2</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Mobile3</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span>Mobile4</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <!-- Suggestion list -->
                                        <span class="sdp-search-result-title">Suggestion</span>
                                        <ul class="sdp-search-result sch-suggestion" role="listbox">
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span class="icons"></span>
                                                    <span>Benefit Overview</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span class="icons"></span>
                                                    <span>Best Cording Guide</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span class="icons"></span>
                                                    <span>Best App Store</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span class="icons"></span>
                                                    <span>Beta Galaxy1</span>
                                                </a>
                                            </li>
                                            <li class="sdp-search-result-item" role="presentation">
                                                <a href="" role="option" class="sdp-search-result-link">
                                                    <span class="icons"></span>
                                                    <span>Beta Galaxy2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

            <!-- MENU: Document Layout Page -->
            <!-- Applied ClassName : sdp-ly-document / Target: sdp-container -->
            <div id="el-sdp-container"
                class="sdp-container sdp-ly-document has-docs-top-third-nav">

                
                <!-- Third Nav -->
                <div id="el-docs-top-third-nav" class="docs-top-third-nav" data-root="/smarttv/develop">
                    <div class="inner-third-nav">
                        <!-- Partners/Public Doc Tabs -->
                        <div class="partners-service btn-group">
                            

                            
                                <a href="/smarttv/design/overview.html" class="btn ">
                                    <span class="txt">Design</span>
                                </a>                           
                            
                                <a href="/smarttv/develop/overview.html" class="btn active">
                                    <span class="txt">Develop</span>
                                </a>                           
                            
                                <a href="/smarttv/develop/api-references/overview.html" class="btn ">
                                    <span class="txt">API References</span>
                                </a>                           
                            
                                <a href="/smarttv/develop/samples/overview.html" class="btn ">
                                    <span class="txt">Samples</span>
                                </a>                           
                            
                                <a href="/smarttv/legacy/overview.html" class="btn ">
                                    <span class="txt">TV Legacy Platform</span>
                                </a>                           
                            
                            
                            
                                
                            
                        </div>
                        
                        
                         
                            <a href="#" class="btn-toggle-mobile-third-nav">
                                <em class="sr-only">Toggle Mobile Third Nav</em>
                            </a>
                        
                    </div>
                </div>
                
                
                <!--  document sticky title bar -->
                <div id="el-top-title-nav" class="docs-top-title-nav">
                    <div class="inner-title-nav">
                        <div class="lft-nav">
                            <nav class="nav-breadcrumb" aria-label="breadcrumb">
                                <ol id="el-breadcrumb" class="breadcrumb">
                                    
                                        <li class="breadcrumb-item">
                                            <a class="item-text" href="/SmartTV">Smart TV</a>
                                        </li>
                                    
                                    <!-- breadcrumb-item here!! -->
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <!-- toggle -->
                    <a href="#" class="btn-toggle-mobile-lnb">
                        <em class="sr-only">Toggle Side navigation</em>
                    </a>
                </div>



                <div class="inner-wrap">
                     
                        <nav id="el-third-nav-document" class="third-nav-document">
                            <div id="el-third-nav-wrap" class="third-nav-wrap">
                                <ul id="third-nav-list" class="third-nav-list">
                                     
                                         
                                             
                                                <li class="third-nav-item">
                                                    <a class="third-nav-link" href="/smarttv/design/overview.html">
                                                        <span class="txt">Design</span>
                                                    </a>
                                                </li>
                                            

                                         
                                            

                                         
                                             
                                                <li class="third-nav-item">
                                                    <a class="third-nav-link" href="/smarttv/develop/api-references/overview.html">
                                                        <span class="txt">API References</span>
                                                    </a>
                                                </li>
                                            

                                         
                                             
                                                <li class="third-nav-item">
                                                    <a class="third-nav-link" href="/smarttv/develop/samples/overview.html">
                                                        <span class="txt">Samples</span>
                                                    </a>
                                                </li>
                                            

                                         
                                             
                                                <li class="third-nav-item">
                                                    <a class="third-nav-link" href="/smarttv/legacy/overview.html">
                                                        <span class="txt">TV Legacy Platform</span>
                                                    </a>
                                                </li>
                                            

                                        
                                    
                                     
                                        
                                    
                                </ul>
                            </div>
                        </nav>
                    
                    
                        <nav class="sidebar-lnb-document" id="el-sidebar-lnb-document">
                        <div class="side-navbar">
                            <div class="nav-lnb-wrap">
                                <ul class="nav flex-column nav-lnb">
                                    

    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " >
                        <span class="txt">Application Basics</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Specifications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/general-specifications.html" >
                        <span class="txt">General Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/web-engine-specifications.html" >
                        <span class="txt">Web Engine Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications.html" >
                        <span class="txt">Media Specifications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Web Applications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Getting Started</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/quick-start-guide.html" >
                        <span class="txt">Quick-start Guide</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/creating-tv-applications.html" >
                        <span class="txt">Creating Web Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/creating-tv-applications/importing-tv-applications.html" >
                        <span class="txt">Importing Web Applications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Guides</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Fundamentals</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        active"
                        style=""
                        href="/smarttv/develop/guides/fundamentals/configuring-tv-applications.html" >
                        <span class="txt">Configuring Web Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/prelaunching-applications.html" >
                        <span class="txt">Prelaunching Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/managing-screen-resolution.html" >
                        <span class="txt">Managing Screen Resolution</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/setting-screensaver.html" >
                        <span class="txt">Setting Screensaver</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/retrieving-platform-information.html" >
                        <span class="txt">Retrieving Platform Information</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/checking-network-status.html" >
                        <span class="txt">Checking Network Status</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/multitasking.html" >
                        <span class="txt">Multitasking</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/accessibility.html" >
                        <span class="txt">Accessibility</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/text-to-speech.html" >
                        <span class="txt">Text To Speech</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/fundamentals/terminating-applications.html" >
                        <span class="txt">Terminating Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/application-security.html" >
                        <span class="txt">Application Security</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">User Interaction</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/user-interaction.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/user-interaction/remote-control.html" >
                        <span class="txt">Remote Control</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/user-interaction/mouse.html" >
                        <span class="txt">Mouse</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/user-interaction/keyboardime.html" >
                        <span class="txt">Keyboard/IME</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/user-interaction/gamepad.html" >
                        <span class="txt">Gamepad</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Multimedia</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/media-playback/using-video-elements.html" >
                        <span class="txt">Playback Using Video Elements</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/media-playback/using-audio-elements.html" >
                        <span class="txt">Playback Using Audio Elements</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/media-playback/using-avplay.html" >
                        <span class="txt">Playback Using AVPlay</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/adaptive-streaming.html" >
                        <span class="txt">Adaptive Streaming</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/subtitles.html" >
                        <span class="txt">Subtitles</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/4k-8k-uhd-video.html" >
                        <span class="txt">4K 8K UHD Video</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/multimedia/video-splash-screen/videosplashscreen-feature-tutorial.html" >
                        <span class="txt">Video Splash Screen</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Data Handling</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/data-handling/using-web-storage.html" >
                        <span class="txt">Using Web Storage</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/data-handling/managing-file-operations.html" >
                        <span class="txt">Managing File Operations</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/data-handling/handling-usb-storages.html" >
                        <span class="txt">Handling USB Storages</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/data-handling/downloading-data.html" >
                        <span class="txt">Downloading Data</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">PiP (Picture in Picture)</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/pip-picture-in-picture/managing-pip-windows.html" >
                        <span class="txt">Managing PiP Windows</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/pip-picture-in-picture/showing-pip-overlays.html" >
                        <span class="txt">Showing PiP Overlays</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Smart Hub Preview</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/smart-hub-preview.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/smart-hub-preview/implementing-public-preview.html" >
                        <span class="txt">Implementing Public Preview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/smart-hub-preview/implementing-personal-preview.html" >
                        <span class="txt">Implementing Personal Preview</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Samsung Checkout</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/samsung-checkout.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/samsung-checkout/implementing-the-purchase-process.html" >
                        <span class="txt">Implementing the Purchase Process</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/samsung-checkout/samsung-checkout-dpi-portal.html" >
                        <span class="txt">Samsung Checkout DPI Portal</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/samsung-checkout/samsung-checkout-service-faq.html" >
                        <span class="txt">Samsung Checkout Service FAQ</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Application Performance</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/application-performance-improvement.html" >
                        <span class="txt">Application Performance Improvement</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/application-performance-improvement/launch-time-optimization.html" >
                        <span class="txt">Launch Time Optimization</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Unique Identifiers</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/unique-identifiers-for-smarttv/tizen-id-for-advertising.html" >
                        <span class="txt">Tizen ID for Advertising</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/unique-identifiers-for-smarttv/uuid.html" >
                        <span class="txt">UUID</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/guides/sero-guide.html" >
                        <span class="txt">Sero Guide</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Web Application Extensions</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">WebAssembly</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/webassembly.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Getting Started</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/setting-up-samsung-emscripten-sdk-and-tizen-studio.html" >
                        <span class="txt">Setting Up Samsung Emscripten SDK and Tizen Studio</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/configuring-samsung-emscripten-sdk-for-tizen-studio.html" >
                        <span class="txt">Configuring Samsung Emscripten SDK for Tizen Studio</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/creating-webassembly-applications.html" >
                        <span class="txt">Creating WebAssembly Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/building-webassembly-application.html" >
                        <span class="txt">Building WebAssembly Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/running-webassembly-applications.html" >
                        <span class="txt">Running WebAssembly Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/getting-started/debugging-webassembly-applications.html" >
                        <span class="txt">Debugging WebAssembly Applications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Advanced Development</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/advanced-development/adding-existing-webassembly-modules-to-web-applications.html" >
                        <span class="txt">Adding Existing WebAssembly Modules to Web Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/advanced-development/exporting-webassembly-applications.html" >
                        <span class="txt">Exporting WebAssembly Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/advanced-development/importing-webassembly-applications.html" >
                        <span class="txt">Importing WebAssembly Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/advanced-development/configuring-webassembly-modules-build-properties.html" >
                        <span class="txt">Configuring WebAssembly Module&#39;s Build Properties</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/advanced-development/building-and-cleaning-webassembly-modules.html" >
                        <span class="txt">Building and Cleaning WebAssembly Modules</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Tizen WASM Player</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/tizen-wasm-player-features.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/using-tizen-wasm-player.html" >
                        <span class="txt">Using Tizen WASM Player</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/initializing-wasm-player.html" >
                        <span class="txt">Initializing WASM Player</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/starting-playback.html" >
                        <span class="txt">Starting Playback Using WASM Player</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/managing-playback.html" >
                        <span class="txt">Managing Playback Using WASM Player</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/using-advanced-player-features.html" >
                        <span class="txt">Using Advanced Player Features</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-player/handling-configuration-and-errors.html" >
                        <span class="txt">Handling Configuration and Errors</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-wasm-player/using-tizen-wasm-video-decoder.html" >
                        <span class="txt">Using Tizen WASM Video Decoder</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Tizen Sockets Extension</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-sockets-extension/tizen-sockets-extension.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-sockets-extension/building-curl-applications-using-cli-tools.html" >
                        <span class="txt">Building cURL Applications Using CLI Tools</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/tizen-sockets-extension/building-curl-applications-using-tizen-studio.html" >
                        <span class="txt">Building cURL Applications Using Tizen Studio</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Sample-based Tutorials</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/sample-based-tutorials/tizen-wasm-player-sample.html" >
                        <span class="txt">Tizen WASM Player Sample</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/sample-based-tutorials/tizen-wasm-video-decoder-sample.html" >
                        <span class="txt">Tizen WASM Video Decoder Sample</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/webassembly/download.html" >
                        <span class="txt">Download</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Smart View SDK</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/introduction.html" >
                        <span class="txt">Introduction</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/getting-started.html" >
                        <span class="txt">Getting Started</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Sender Apps</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/sender-apps.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/sender-apps/javascript-sender-app.html" >
                        <span class="txt">JavaScript Sender App</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/android-sender-app.html" >
                        <span class="txt">Android Sender App</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/android-sender-app/enhanced-features.html" >
                        <span class="txt">Android Serder App Enhanced Features</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/ios-sender-app.html" >
                        <span class="txt">iOS Sender App</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/ios-sender-app/enhanced-features.html" >
                        <span class="txt">iOS Sender App Enhanced Features</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Receiver Apps</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/receiver-apps.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/receiver-apps/publish.html" >
                        <span class="txt">Publish</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/receiver-apps/testing-tizen-sdk-emulator.html" >
                        <span class="txt">Testing Tizen SDK Emulator</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/receiver-apps/debugging.html" >
                        <span class="txt">Debugging</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/default-media-player.html" >
                        <span class="txt">Default Media Player</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Supported Devices</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/supported-device/wireless-speaker.html" >
                        <span class="txt">Wireless Speaker</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/supported-device/supported-tvs.html" >
                        <span class="txt">Supported TVs</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Recommendation</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/recommendation/add-smart-view-sdk-to-cast-enabled-app.html" >
                        <span class="txt">Adding Smart View SDK to Cast-enabled App</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/recommendation/how-to-manage-multi-app-ids.html" >
                        <span class="txt">Managing Multi-Application IDs</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/recommendation/multi-user-case.html" >
                        <span class="txt">Multi-User Case</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/smart-view-sdk/download.html" >
                        <span class="txt">Download</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">NaCl</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/overview.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/getting-started.html" >
                        <span class="txt">Getting Started</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/adding-nacl-modules-to-applications.html" >
                        <span class="txt">Adding NaCl Modules to Applications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/using-tizen-studio-for-nacl.html" >
                        <span class="txt">Using Tizen Studio for NaCl</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Managing NaCl Projects</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/creating-nacl-projects.html" >
                        <span class="txt">Creating NaCl Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/building-nacl-projects.html" >
                        <span class="txt">Building NaCl Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/launching-nacl-projects.html" >
                        <span class="txt">Launching NaCl Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/debugging-nacl-projects.html" >
                        <span class="txt">Debugging NaCl Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/adding-privileges-and-permissions.html" >
                        <span class="txt">Adding Privileges and Permissions</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/exporting-nacl-projects.html" >
                        <span class="txt">Exporting NaCl Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-projects/importing-nacl-projects.html" >
                        <span class="txt">Importing NaCl Projects</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Managing NaCl-enabled Projects</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/building-nacl-enabled-projects.html" >
                        <span class="txt">Building NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/launching-nacl-enabled-projects.html" >
                        <span class="txt">Launching NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/debugging-nacl-enabled-projects.html" >
                        <span class="txt">Debugging NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/exporting-nacl-enabled-projects.html" >
                        <span class="txt">Exporting NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/importing-nacl-enabled-projects.html" >
                        <span class="txt">Importing NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/creating-nacl-enabled-projects.html" >
                        <span class="txt">Creating NaCl-enabled Projects</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-enabled-projects/adding-nacl-modules-to-projects.html" >
                        <span class="txt">Adding NaCl Modules to Projects</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/managing-nacl-toolchains.html" >
                        <span class="txt">Managing NaCl Toolchains</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/using-message-template-generator.html" >
                        <span class="txt">Using Message Template Generator</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Sample-based Tutorials</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/hello-world-in-c.html" >
                        <span class="txt">Hello World in C</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/hello-world-in-cplusplus.html" >
                        <span class="txt">Hello World in C++</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/input-events-in-cplusplus.html" >
                        <span class="txt">Input Events in C++</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/2d-graphics-in-cplusplus.html" >
                        <span class="txt">2D Graphics in C++</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/3d-graphics-in-cplusplus.html" >
                        <span class="txt">3D Graphics in C++</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/audio-in-cplusplus.html" >
                        <span class="txt">Audio in C++</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/sample-based-tutorials/sockets-in-cplusplus.html" >
                        <span class="txt">Sockets in C++</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">NaCl Player</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/nacl-player/introduction.html" >
                        <span class="txt">Introduction</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/nacl-player/main-use-cases.html" >
                        <span class="txt">Main Use Cases</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/nacl-player/api-usage.html" >
                        <span class="txt">API Usage</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/nacl-player/developing-playback-applications.html" >
                        <span class="txt">Developing Playback Applications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/nacl/download.html" >
                        <span class="txt">Download</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">TOAST</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/toast.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Migrating Applications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/migrating-applications/migrating-legacy-platform-to-tizen.html" >
                        <span class="txt">Migrating Legacy Platform to Tizen</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/migrating-applications/migrating-legacy-platform-to-toast.html" >
                        <span class="txt">Migrating Legacy Platform to TOAST</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/migrating-applications/migrating-tizen-to-toast.html" >
                        <span class="txt">Migrating Tizen to TOAST</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">CAPH 3.0</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/caph-30.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/caph-30/caph-history.html" >
                        <span class="txt">CAPH History</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/caph-30/download.html" >
                        <span class="txt">Download</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/partner-solutions.html" >
                        <span class="txt">Partner Solutions</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">.NET Applications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv.html" >
                        <span class="txt">Tizen .NET TV</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Getting Started</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/getting-started/setting-up-development-environment.html" >
                        <span class="txt">Setting Up Development Environment</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/getting-started/creating-net-tv-applications.html" >
                        <span class="txt">Creating .NET Applications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Guides</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/basics.html" >
                        <span class="txt">Basics</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/user-interaction.html" >
                        <span class="txt">User Interaction</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/multimedia.html" >
                        <span class="txt">Multimedia</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ml-4">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Samsung Checkout</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth5">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/samsung-checkout.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/samsung-checkout/implementing-the-purchase-process.html" >
                        <span class="txt">Implementing the Purchase Process</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/samsung-checkout/samsung-checkout-dpi-portal.html" >
                        <span class="txt">Samsung Checkout DPI Portal</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/guides/samsung-checkout/samsung-checkout-service-faq.html" >
                        <span class="txt">Samsung Checkout Service FAQ</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">.NET Application Extensions</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tizen-net-tv/extension-libraries/juvoplayer.html" >
                        <span class="txt">JuvoPlayer</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " >
                        <span class="txt">Devices</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                        
                    
                    <a class="nav-link depth2-link show" >
                        <span class="txt">Smart TV</span>
                    </a>
                    
                        <div class="navbar-sub-wrap" style="height: auto;">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/tv-model-groups.html" >
                        <span class="txt">TV Model Groups</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Video Specifications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2022-tv-video-specifications.html" >
                        <span class="txt">2022 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2021-tv-video-specifications.html" >
                        <span class="txt">2021 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2020-tv-video-specifications.html" >
                        <span class="txt">2020 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2019-tv-video-specifications.html" >
                        <span class="txt">2019 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2018-tv-video-specifications.html" >
                        <span class="txt">2018 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2017-tv-video-specifications.html" >
                        <span class="txt">2017 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2016-tv-video-specifications.html" >
                        <span class="txt">2016 TV Video Specifications</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/specifications/media-specifications/2015-tv-video-specifications.html" >
                        <span class="txt">2015 TV Video Specifications</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " >
                        <span class="txt">Tools</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tools/prerequisites.html" >
                        <span class="txt">Prerequisites</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tools/tizen-studio.html" >
                        <span class="txt">Tizen Studio</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">TV Extension</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tools/tv-extension/download.html" >
                        <span class="txt">Download</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tools/tv-extension/archive.html" >
                        <span class="txt">Archive</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/tools/tv-extension/release-history.html" >
                        <span class="txt">Release History</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Setting Up SDK</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html" >
                        <span class="txt">Installing TV SDK</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html" >
                        <span class="txt">Creating Certificates</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk/updating-tv-sdk.html" >
                        <span class="txt">Updating TV SDK</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk/uninstalling-tv-sdk.html" >
                        <span class="txt">Uninstalling TV SDK</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Using SDK</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">IDE Interface and Views</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/ide-interface-and-views.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/ide-interface-and-views/code-editing-tools.html" >
                        <span class="txt">Code Editing Tools</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/ide-interface-and-views/debugging-tools.html" >
                        <span class="txt">Debugging Tools</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-simulator.html" >
                        <span class="txt">TV Simulator</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">TV Emulator</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-emulator.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-emulator/emulator-control-panel.html" >
                        <span class="txt">Emulator Control Panel</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-emulator/bridged-network-configuration.html" >
                        <span class="txt">Bridged Network Configuration</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-emulator/emulator-limitations.html" >
                        <span class="txt">Emulator Limitations</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/tv-device.html" >
                        <span class="txt">TV Device</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Web Inspector</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/web-inspector.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/web-inspector/web-inspector-features.html" >
                        <span class="txt">Web Inspector Features</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/getting-started/using-sdk/command-line-interface.html" >
                        <span class="txt">Command Line Interface</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Additional Tools</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/atom-ide-package.html" >
                        <span class="txt">Atom IDE Package</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/vscode-extension.html" >
                        <span class="txt">VSCode Extension</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/extension-libraries/wits.html" >
                        <span class="txt">Wits</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " >
                        <span class="txt">Checklists for Quality</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/development-checklist.html" >
                        <span class="txt">Overview</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/development-checklist/common.html" >
                        <span class="txt">Common Checklist</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/development-checklist/account.html" >
                        <span class="txt">Account Checklist</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/development-checklist/video.html" >
                        <span class="txt">Video Checklist</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/development-checklist/smart-view-sdk.html" >
                        <span class="txt">Smart View SDK Checklist</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " >
                        <span class="txt">FAQ</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Developing Application Q&amp;A</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/application-installation.html" >
                        <span class="txt">Application Installation Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/application-testing.html" >
                        <span class="txt">Application Testing Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/data-and-file-handling.html" >
                        <span class="txt">Data and File Handling Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/device-information-and-firmware.html" >
                        <span class="txt">Device Information and Firmware Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/extension-libraries.html" >
                        <span class="txt">Extension Libraries Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/hosted-applications.html" >
                        <span class="txt">Hosted Applications Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/multimedia.html" >
                        <span class="txt">Multimedia Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/multimedia-drm.html" >
                        <span class="txt">Multimedia DRM Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/multimedia-streaming.html" >
                        <span class="txt">Multimedia Streaming Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/networking-and-connectivity.html" >
                        <span class="txt">Networking and Connectivity Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/privileges.html" >
                        <span class="txt">Privileges Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/security.html" >
                        <span class="txt">Security Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/smart-hub-preview.html" >
                        <span class="txt">Smart Hub Preview Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/specifications-and-feature-support.html" >
                        <span class="txt">Specifications and Feature Support Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/third-party-features.html" >
                        <span class="txt">Third-party Features Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/tizen-studio.html" >
                        <span class="txt">Tizen Studio Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/tizen-net-tv-applications-qa/tizen-net-tv.html" >
                        <span class="txt">Tizen .NET TV Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/user-interaction.html" >
                        <span class="txt">User Interaction Q&amp;A</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/support/documentation-qa/developing-applications-qa/other-features.html" >
                        <span class="txt">Other Features Q&amp;A</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="https://developer.samsung.com/smarttv/design/smart-tv-application-design-qa.html" target=_blank>
                        <span class="txt">Designing Application Q&amp;A</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item lnb-depth1 ">
                    
                    <hr>
                    
                    
                    <a class="nav-link depth1-link " href=/smarttv/develop/distribute.html>
                        <span class="txt">Distribute</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth2">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style="display: none;"
                        href="/smarttv/develop/distribute.html" >
                        <span class="txt">/</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " href=/smarttv/develop/distribute/seller-office.html>
                        <span class="txt">Seller Office</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style="display: none;"
                        href="/smarttv/develop/distribute/seller-office.html" >
                        <span class="txt">/</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Membership</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/membership/becoming-seller-office-member.html" >
                        <span class="txt">Becoming Seller Office Member</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/membership/managing-seller-group.html" >
                        <span class="txt">Managing Seller Group</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/membership/becoming-partner.html" >
                        <span class="txt">Becoming Partner</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/membership/modifying-membership.html" >
                        <span class="txt">Modifying Membership</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Applications</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/tv-app-publication-process.html" >
                        <span class="txt">TV App Publication Process</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/registering-application.html" >
                        <span class="txt">Registering Application</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/entering-application-information.html" >
                        <span class="txt">Entering Application Information</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/distributing-application.html" >
                        <span class="txt">Distributing Application</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/resolving-defect.html" >
                        <span class="txt">Resolving Defect</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/applications/changing-application-status.html" >
                        <span class="txt">Changing Application Status</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">1:1 Q&amp;A</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/11-qa/11-qa-process.html" >
                        <span class="txt">1:1 Q&amp;A Process</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/11-qa/11-qa-categories.html" >
                        <span class="txt">1:1 Q&amp;A Categories</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/11-qa/asking-question.html" >
                        <span class="txt">Asking Question</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/11-qa/changing-11-qa-status.html" >
                        <span class="txt">Changing 1:1 Q&amp;A Status</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth3-link " >
                        <span class="txt">Report</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth4">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth4-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/report/smart-tv-analytics.html" >
                        <span class="txt">Smart TV Analytics</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/seller-office/faq.html" >
                        <span class="txt">FAQ</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " >
                        <span class="txt">Distribute Policy</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/distribute-policy/age-rating.html" >
                        <span class="txt">Age Rating</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
                
                <li class="nav-item  ">
                    
                    
                    <a class="nav-link depth2-link " href=/smarttv/develop/distribute/launch-checklist.html>
                        <span class="txt">Launch Checklist</span>
                    </a>
                    
                        <div class="navbar-sub-wrap">
                    
                    <div class="navbar-sub-wrap">
                        <ul class="nav lnb-depth3">
                            <li class="nav-item">
                                
    
    
     
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style="display: none;"
                        href="/smarttv/develop/distribute/launch-checklist.html" >
                        <span class="txt">/</span>
                    </a>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth3-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/launch-checklist/application-ui-description.html" >
                        <span class="txt">Application UI Description</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
            
            
                
                
                
                
                
    
                
    
                <li class="nav-item " data-link="/SmartTV/develop/guides/fundamentals/configuring-tv-applications.html">
                    <a class="nav-link depth2-link none-child
                        "
                        style=""
                        href="/smarttv/develop/distribute/application-publication-process.html" >
                        <span class="txt">Application Publication Process</span>
                    </a>
                </li>
            
        
    

                            </li>
                        </ul>
                    </div>
                </li>
            
        
    


                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                    

                    <main role="main" class="main-container has-toc" id="el-main-container">
                        <div class="inner-container col">
                            

                                <div class="inner-sec mkdown-docs">
                                 
                                
                                
                                <p class="mk-wall-cta" >
                                    
                                </p>
                                
                                
                                <h1 id="Configuring-TV-Applications">Configuring TV Applications</h1>
<p>This topic describes Web application configuration, especially for privileges and features specific to Samsung TVs. Many privileges and features available for mobile and wearable Web applications are also available for TV Web applications.</p>
<hr>
<h3>Related Info</h3>
<ul>
<li><a href="https://developer.tizen.org/development/tizen-studio/web-tools/configuring-your-app/configuration-editor">Configuring Applications</a></li>
<li><a href="https://developer.tizen.org/development/training/web-application/understanding-tizen-programming/security-and-api-privileges">Security and API Privileges</a></li>
<li><a href="https://developer.tizen.org/development/training/web-application/application-development-process/setting-project-properties">Setting Project Properties</a></li>
</ul>
<hr>
<p>All Tizen Web application projects must have a &quot;config.xml&quot; file in the project root directory. The configuration file is composed of XML elements, including the <code>&lt;widget&gt;</code> element as its root.  The configuration information is used when you install or run the Tizen Web application.</p>
<p>The &quot;config.xml&quot; file contains the following information:</p>
<ul>
<li class="theme-dark">
<p>Application ID<br><br>
The Samsung TV SDK automatically creates an application ID, which uniquely identifies the application within the package.</p>
<pre class="language-xml"><code class="language-xml">&lt;tizen:application id=&apos;{Package}.{Project Name}&apos; ... /&gt;
</code></pre>
</li>
<li class="theme-dark">
<p>Application version<br><br>
The application version format is &quot;x.y.z&quot;.</p>
<pre class="language-xml"><code class="language-xml">&lt;widget &#x2026; version=&apos;{0-255}.{0-255}.{0-65535}&apos; ... /&gt;
</code></pre>
</li>
<li class="theme-dark">
<p>Application icon<br><br>
File path for the launcher icon.</p>
<pre class="language-xml"><code class="language-xml">&lt;icon src=&apos;Icon Path&apos; /&gt;
</code></pre>
</li>
<li class="theme-dark">
<p>HTML content<br><br>
File path for the start-up file of the Web application. By default, it is the &quot;index.html&quot; file in the root directory.</p>
<pre class="language-xml"><code class="language-xml">&lt;content src=&apos;HTML Path&apos; /&gt;
</code></pre>
</li>
<li class="theme-dark">
<p>Privileges<br><br>
Tizen and Samsung TV APIs that handle platform and user-sensitive data require privileges that must be declared before the APIs can be used.</p>
<pre class="language-xml"><code class="language-xml">&lt;tizen privilege name=&apos;http://tizen.org/privilege/Privilege Name&apos; /&gt;
&lt;tizen privilege name=&apos;http://developer.samsung.com/privilege/Privilege Name&apos; /&gt;
</code></pre>
</li>
<li>
<p>Network access policy<br><br>
According to the W3C Access Requests Policy (WARP), you cannot access network resources by default. For more information, see <a href="https://developer.tizen.org/development/training/web-application/application-development-process/setting-project-properties#policy">Defining External Access Policies in the Policy Tab</a>.</p>
</li>
<li>
<p>Meta data features<br><br>
Some features, such as prelaunching, are implemented by adding values to the <code>metadata</code> element.</p>
</li>
<li class="theme-dark">
<p>Mouse support<br><br>
Interaction with the application using a mouse, is enabled by default. If you want to disable it for your application, add the following line to the &quot;config.xml&quot; file:</p>
<pre class="language-xml"><code class="language-xml">&lt;tizen:setting pointing-device-support=&apos;disable&apos; /&gt; 
</code></pre>
</li>
</ul>
<p>In the Tizen Studio, you can edit the configuration file in 2 ways:</p>
<ul>
<li>
<p>Web Configuration Editor<br><br>
You can easily set the project configuration (manifest) using a form editor, even if you have no experience in developing a Tizen Web application project.</p>
</li>
<li>
<p>Configuration source editor<br><br>
If you are fluent in the configuration file XML structure, you can modify the XML structure directly through the configuration source editor.</p>
</li>
</ul>
<p>For more information, see <a href="https://developer.tizen.org/development/tizen-studio/web-tools/configuring-your-app/configuration-editor">Configuring Applications</a> and <a href="https://developer.tizen.org/development/training/web-application/application-development-process/setting-project-properties">Setting Project Properties</a>.</p>
<h2 id="Privileges">Privileges</h2>
<p>To use security-sensitive APIs, you must declare the required privileges and sign your application with a certificate for the appropriate privilege level.  You can add privileges to the &quot;config.xml&quot; file using the &quot;Privileges&quot; tab of the Configuration Editor in the Tizen Studio.</p>
<p><img src="/media/2692/tizen-api-privileges.png" alt="Figure 1. Adding privileges" class="img-fluid"></p>
<h2 id="Tizen-API">Tizen API</h2>
<p>The following table lists the privileged Tizen APIs specific to TVs.</p>
<p>For more information on Tizen API privileges, see <a href="https://developer.tizen.org/development/training/web-application/understanding-tizen-programming/security-and-api-privileges">Security and API Privileges</a>.</p>
<table>
<thead>
<tr>
<th>Privilege
</th>
<th style="text-align:center">Level
</th>
<th>Related API
</th>
</tr>
</thead>
<tbody>
<tr>
<td>http://tizen.org/privilege/tv.audio
</td>
<td style="text-align:center" rowspan="4">Public
</td>
<td><a href="/SmartTV/develop/api-references/tizen-web-device-api-references/tvaudiocontrol-api.html">TVAudioControl API</a><p></p>
</td>
</tr>
<tr>
<td>http://tizen.org/privilege/tv.display
</td>
<td><a href="/SmartTV/develop/api-references/tizen-web-device-api-references/tvdisplaycontrol-api.html">TVDisplayControl API</a><p></p>
</td>
</tr>
<tr>
<td>http://tizen.org/privilege/tv.inputdevice
</td>
<td><a href="/SmartTV/develop/api-references/tizen-web-device-api-references/tvinputdevice-api.html">TVInputDevice API</a><p></p>
</td>
</tr>
<tr>
<td>http://tizen.org/privilege/tv.window
</td>
<td><a href="/SmartTV/develop/api-references/tizen-web-device-api-references/tvwindow-api.html">TVWindow API</a><p></p>
</td>
</tr>
</tbody>
</table>
<p><small class="small" style="top: -24px;position: relative;">Table 1. Tizen API privileges</small></p>
<h2 id="Samsung-Product-API">Samsung Product API</h2>
<p>The following table lists the privileged Samsung Product APIs specific to TVs.</p>
<table>
<thead>
<tr>
<th>Privilege
</th>
<th style="text-align:center">Level
</th>
<th>Related API
</th>
</tr>
</thead>
<tbody>
<tr>
<td>http://developer.samsung.com/privilege/allshare
</td>
<td style="text-align:center" rowspan="6">Public
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/asfservice-api.html">ASFService API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/billing
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/billing-api.html">Billing API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/drmplay
</td>
<td><code>setDrm()</code> method of the <a href="/SmartTV/develop/api-references/samsung-product-api-references/avplay-api.html#AVPlay-AVPlayManager-setDrm">AVPlay API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/microphone
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/microphone-api.html">Microphone API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/network.public
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/network-api.html">Network API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/productinfo
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/productinfo-api.html">ProductInfo API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/sso.partner
</td>
<td style="text-align:center"><strong>Partner</strong><p></p>
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/sso-api.html">SSO API</a><p></p>
</td>
</tr>
<tr>
<td>http://developer.samsung.com/privilege/widgetdata
</td>
<td style="text-align:center">Public
</td>
<td><a href="/SmartTV/develop/api-references/samsung-product-api-references/widgetdata-api.html">WidgetData API</a><p></p>
</td>
</tr>
</tbody>
</table>
<p><small class="small" style="top: -24px;position: relative;">Table 2. Samsung Product API privileges</small></p>
<h2 id="Meta-Data">Meta Data</h2>
<p>Some features are implemented by adding key-value pairs to the <code>metadata</code> element. You can add meta data in the &quot;Tizen&quot; tab of the Configuration Editor in the Tizen Studio.</p>
<p><img src="/media/2537/meta-data-for-samsung-tv.png" alt="Figure 2. Adding meta data" class="img-fluid"></p>
<p>The following table lists the meta data keys available for TVs.</p>
<table>
<thead>
<tr>
<th>Key
</th>
<th style="text-align:center">Value<br>(default in bold)<p></p>
</th>
<th>Supported Models
</th>
<th>Description
</th>
</tr>
</thead>
<tbody>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/prelaunch.support&#x201D;
</td>
<td style="text-align:center">&#x201C;<strong>true</strong>&#x201D;<br>&#x201C;false&#x201D;<p></p>
</td>
<td>Since 2015
</td>
<td>Enable or disable <a href="/SmartTV/develop/guides/fundamentals/prelaunching-applications.html">prelaunching</a>.<br>The default value is &#x201C;false&#x201D; for 2015 models.<p></p>
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/use.preview&#x201D;
</td>
<td style="text-align:center">JSON file path
</td>
<td rowspan="2">Since 2016
</td>
<td>Content for <a href="/SmartTV/develop/guides/smart-hub-preview.html">Smart Hub Preview</a>.<p></p>
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/gamepad&#x201D;
</td>
<td style="text-align:center">Gamepad model name
</td>
<td>Require a specific <a href="/SmartTV/develop/guides/user-interaction/gamepad.html">gamepad</a> model to be connected.<p></p>
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/use.network&#x201D;
</td>
<td style="text-align:center" rowspan="3">&#x201C;<strong>true</strong>&#x201D;<br>&#x201C;false&#x201D;<p></p>
</td>
<td>Since 2015
</td>
<td>Enable or disable checking the network connection when the application is launched.
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/use.voiceguide&#x201D;
</td>
<td>Since 2016
</td>
<td>Enable or disable voice guide for the application, if the user has enabled it in the TV settings.
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/auto.update&#x201D;
</td>
<td>Since 2015
</td>
<td>Enable or disable automatically updating the application during regularly-scheduled updates.
</td>
</tr>
<tr>
<td>&#x201C;http://samsung.com/tv/metadata/force.update&#x201D;
</td>
<td style="text-align:center">&#x201C;true&#x201D;<br>&#x201C;<strong>false</strong>&#x201D;<p></p>
</td>
<td>2015 to 2016
</td>
<td>Enable or disable automatically updating the application outside regularly-scheduled updates.
</td>
</tr>
</tbody>
</table>
<p><small class="small" style="top: -24px;position: relative;">Table 3. Meta data</small></p>

                            </div> <!-- markdown doc --> 
                            <aside class="etc-aside">
                                <a href="#app" class="btn-goto-top no-ga">
                                    <span class="sr-only">top of page</span>
                                    <span class="icon-top align-middle icon-size-2"><i
                                            class="s-ico s-ico-arrow-top-white"></i></span>
                                </a>
                            </aside>   
                        </div>     
                    </main>
                      
                </div>
            </div>
            <footer class="sdp-footer" data-component="true">
    <div class="sdp-ft-wrap web-d-none">
        <a class="navbar-brand" href="/">Samsung Developers</a>
    </div>
    <div class="inner-wrap">
        <div class="sdp-sitemap">
            <div class="sdp-ft-wrap doc-d-none">
                <a class="navbar-brand" href="/">Samsung Developers</a>
            </div>
            <div class="sdp-ft-wrap">
                <div class="ft-header">
                    <span>Quick Link</span>
                    <button class="toggle-submenu"></button>
                </div>
                <div class="ft-depth2-wrap">
                    <div class="ft-depth2-inner">
                        <ul class="nav ft-menu-list">
                        
                            <li class="menu-item">
                                <a class="item-link" href="/android-usb-driver"><span>Android USB Driver</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/codelab"><span>Code Lab</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/galaxy-emulator-skin"><span>Galaxy Emulator Skin</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/foldables-and-largescreens"><span>Foldables and Large Screens</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/one-ui-beta"><span>One UI Beta</span></a>
                            </li>
                        
                        </ul>
                        <ul class="nav ft-menu-list">
                        
                            <li class="menu-item">
                                <a class="item-link" href="/remote-test-lab"><span>Remote Test Lab</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/developers-podcast"><span>Samsung Developers Podcast</span></a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sdp-ft-wrap">
                <div class="ft-header">
                    <span>Family Site</span>
                    <button class="toggle-submenu"></button>
                </div>
                <div class="ft-depth2-wrap">
                    <div class="ft-depth2-inner">
                        <ul class="nav ft-menu-list">
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://bixbydevelopers.com"><span>Bixby</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://developer.samsungknox.com"><span>Knox</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://pay.samsung.com/developers"><span>Samsung Pay</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://smartthings.developer.samsung.com"><span>SmartThings</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://docs.tizen.org"><span>Tizen</span></a>
                            </li>
                         
                        </ul>
                        <ul class="nav ft-menu-list">
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="http://www.oceanbrasil.com"><span>Samsung Dev Brazil</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" target="_blank" href="https://www.europe-samsung.com/smsdev/Home/Index"><span>Samsung Dev Spain</span></a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="sdp-ft-wrap sdp-ft-wrap-w-half">
                <div class="ft-header">
                    <span>Legal</span>
                    <button class="toggle-submenu"></button>
                </div>
                <div class="ft-depth2-wrap">
                    <div class="ft-depth2-inner">
                        <ul class="nav ft-menu-list">
                        
                            <li class="menu-item">
                                <a class="item-link" href="/terms"><span>Terms</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/privacy"><span>Privacy</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/open-source"><span>Open Source</span></a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Social link ment for mobile  -->
            <div class="sdp-ft-wrap li-mobile">
                <div class="ft-header">
                    <span>Social Communications</span>
                    <button class="toggle-submenu"></button>
                </div>
                <div class="ft-depth2-wrap">
                    <div class="ft-depth2-inner">
                        <ul class="nav ft-menu-list ft-sns-list">
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://www.facebook.com/samsungdev"><span>Facebook</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://instagram.com/samsung_dev"><span>Instagram</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://twitter.com/samsung_dev"><span>Twitter</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://www.youtube.com/samsungdevelopers"><span>YouTube</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://samsungdev.buzzsprout.com"><span>Buzzsprout</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/feed"><span>Rss</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="https://www.linkedin.com/company/samsungdevelopers"><span>Linkedin</span></a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </div>

            <div class="sdp-ft-wrap sdp-ft-wrap-w-half">
                <div class="ft-header">
                    <span></span>
                    <button class="toggle-submenu"></button>
                </div>
                <div class="ft-depth2-wrap">
                    <div class="ft-depth2-inner">
                        <ul class="nav ft-menu-list system-list">
                        
                            <li class="menu-item">
                                <a class="item-link" href="/system-status"><span>System Status</span></a>
                            </li>
                        
                            <li class="menu-item">
                                <a class="item-link" href="/sitemap"><span>Site Map</span></a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <ul class="nav ft-menu-list system-list">
             
                <li class="menu-item">
                    <a class="item-link" href="/system-status"><span>System Status</span></a>
                </li>
             
                <li class="menu-item">
                    <a class="item-link" href="/sitemap"><span>Site Map</span></a>
                </li>
            
            </ul>
            <ul class="nav ft-sns-list">
                <li class="menu-item"><a class="item-link" href="https://www.facebook.com/samsungdev" target="_blank"><i class="s-ico s-ico-facebook"></i><span class="sr-only">facebook</span></a></li>
                <li class="menu-item"><a class="item-link" href="https://instagram.com/samsung_dev" target="_blank"><i class="s-ico s-ico-instagram"></i><span class="sr-only">instagram</span></a></li>
                <li class="menu-item"><a class="item-link" href="https://twitter.com/samsung_dev" target="_blank"><i class="s-ico s-ico-twitter"></i><span class="sr-only">twitter</span></a></li>
                <li class="menu-item"><a class="item-link" href="https://www.youtube.com/samsungdevelopers" target="_blank"><i class="s-ico s-ico-youtube"></i><span class="sr-only">youtube</span></a></li>
                <li class="menu-item"><a class="item-link" href="https://samsungdev.buzzsprout.com" target="_blank"><i class="s-ico s-ico-buzzsprout"></i><span class="sr-only">buzzsprout</span></a></li>
                <li class="menu-item"><a class="item-link" href="/feed" target="_blank"><i class="s-ico s-ico-rss"></i><span class="sr-only">rss</span></a></li>
                <li class="menu-item"><a class="item-link" href="https://www.linkedin.com/company/samsungdevelopers" target="_blank"><i class="s-ico s-ico-linkedin"></i><span class="sr-only">linkedin</span></a>
                </li>
            </ul>
            <p class="copyright">Copyright (c) 2021 SAMSUNG All right Reserved.</p>
        </div>
    </div>
</footer>
        </div>
    </div>
    <!-- scripts for site -->

    
    
    
    

    
<script type="text/javascript" src="/js/sdp.common.js?v=202206182220"></script>
<script type="text/javascript" src="/js/sdp.ui.js?v=202206182220"></script>
<script type="text/javascript" src="/js/sdp.search.js?v=202206182220"></script>
<script type="text/javascript" src="/js/prism.min.js?v=202206182220"></script>

<script type="text/javascript" src="/js/sdp.helpers.js?v=202206182220"></script>






    <script type="text/javascript" src="/js/pageHandler/docPageHandler.js?v=202206182220"></script>
    
    <script type="text/javascript" src="/js/pageHandler/fileDownload.js?v=202206182220"></script>

    
</body>

</html>`

console.log(html.match(/<img.+src=".*">/g)) // Mathcing all img URLs in the html document