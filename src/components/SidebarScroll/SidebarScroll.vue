<template>
    <div class="slideout">
        <nav id="menu" class="menu">
            <a href="https://github.com/mango/slideout" target="_blank">
                <header class="menu-header">
                    <span class="menu-header-title">Tests</span>
                </header>
            </a>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                    <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                    <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                    <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                    <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                    <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                    <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                    <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                    <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                    <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                    <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                    <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                    <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                    <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>
        </nav>

        <main id="panel" class="panel">
            <header class="panel-header">
                <button class="hamburger hamburger--collapse js-slideout-toggle btn-hamburger" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <h1 class="title">Slideout.js</h1>
            </header>
        </main>
    </div>
</template>

<script>
    import Vue from "vue"
    import slideOut from "slideout"
    import $ from "jquery"
    export default {
        data () {
            return {
                msg: 'Hello Vue 你好!'
            }
        },
        mounted: function(){
            var slideout = new slideOut({
                'panel': $('.panel')[0],
                'menu': $('.menu')[0],
                'padding': 256,
                'tolerance': 100,
                'side': 'right'
            });
            document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
                slideout.toggle();
            });

            document.querySelector('.menu').addEventListener('click', function(eve) {
                if (eve.target.nodeName === 'A') { slideout.close(); }
            });
        }
    }
</script>

<style>
    /*@import "/node_modules/hamburgers/dist/hamburgers.min.css";*/
    .slideout {
        width: 100vw;
        height: 100vh;
    }

    .slideout-menu {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
        width: 256px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: none;
    }

    .slideout-panel {
        position:relative;
        z-index: 1;
        will-change: transform;
    }

    .slideout-open,
    .slideout-open body,
    .slideout-open .slideout-panel {
        overflow: hidden;
    }

    .slideout-open .slideout-menu {
        display: block;
    }

    /*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
    html,
    body {
        font: 100%/1.4em 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0 auto;
        color: #222;
        -webkit-text-size-adjust: none;
        -webkit-font-smoothing: antialiased;
    }

    body,
    .panel {
        background-color: #fff;
    }

    .menu {
        background-color: #1D1F20;
        background-image: linear-gradient(145deg, #1D1F20, #404348);
    }

    a {
        color: #4B5;
        text-decoration: none;
    }

    .menu a {
        color: #fff;
    }

    .menu a:hover {
        text-decoration: underline;
    }

    .menu-header {
        border-bottom: 1px solid #2a2d2f;
        padding: 20px;
        background-size: 32px;
    }

    .menu-header-title {
        font-weight: 400;
        letter-spacing: 0.5px;
        margin: 0;
    }

    .menu-section {
        margin: 25px 0;
    }

    .menu-section-title {
        text-transform: uppercase;
        color: #85888d;
        font-weight: 200;
        font-size: 13px;
        letter-spacing: 1px;
        padding: 0 20px;
        margin:0;
    }

    .menu-section-list {
        padding:0;
        margin: 10px 0;
        list-style:none;
    }

    .menu-section-list a {
        display: block;
        padding: 10px 20px;
    }

    .panel {
        text-align: center;
        padding-top: 5px;
        min-height: 100%;
    }

    /**
     * Header
     */
    .panel-header {
        margin: 120px auto 55px;
    }

    .title {
        font-size: 3.2em;
        line-height: 1em;
        margin: 0 0 15px;
        color: #4B5;
        font-weight: 400;
    }

    /**
     * hamburger
     */
    .btn-hamburger {
        border: none;
        position: absolute;
        top: 12px;
        left: 12px;
        outline:none;
        background: url('assets/menu.png') no-repeat center;
        width: 50px;
        height: 50px;
    }

    /**
     * Boxes
     */
    .box {
        border: 1px solid #4b5;
        border-radius: 4px;
        text-align: left;
        margin: 50px 10px;
        position: relative;
    }

    .box:before,
    .box:after {
        content: ' ';
        display: inline-block;
        width: 1px;
        height: 50px;
        border-left: 1px solid #4b5;
        position: absolute;
        left: 50%;
    }

    .box:before {
        top: -50px;
    }

    .box:after {
        bottom: -50px;
    }

    .box-title {
        margin: 0;
        padding:10px 20px;
        border-bottom: 1px solid #4b5;
        color: #4b5;
        font-size: 1.2em;
        font-weight: 400;
    }

    .box-content {
        padding:20px;
        background-color: #f8f8f8;
    }

    /**
     * Medium Screens
     */
    @media all and (min-width:40em) {

        .btn-hamburger {
            top: 20px;
            left: 30px;
        }

        .panel-header {
            margin-top: 40px;
            width: 455px;
        }

        .title {
            font-size: 4.2em;
        }
    }

    /**
     * Large Screens
     */
    @media all and (min-width: 54em) {
        .box {
            width: 70%;
            max-width: 1200px;
            margin: 50px auto;
        }
    }

    .slideout-menu { left: auto; }
    .btn-hamburger { left: auto; right: 12px;}
    .box { height: 1500px; }
</style>
