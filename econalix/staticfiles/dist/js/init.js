"use strict";$(document).ready(function(){dashgrin();emailApp();chatApp();calendarApp();fmApp();$(document).on("click","a.disabled,a:disabled",function(e){return false;});});$(window).on("load",function(){$(".preloader-it").delay(500).fadeOut("slow");});var height,width,$wrapper=$(".hk-wrapper"),$nav=$(".hk-nav"),$vertnaltNav=$(".hk-wrapper.hk-vertical-nav,.hk-wrapper.hk-alt-nav"),$horizontalNav=$(".hk-wrapper.hk-horizontal-nav"),$navbar=$(".hk-navbar");var dashgrin=function(){var featherIcon=$('.feather-icon');if(featherIcon.length>0){feather.replace();}
var counterAnim=$('.counter-anim');if(counterAnim.length>0){counterAnim.counterUp({delay:10,time:1000});}
if($('[data-toggle="tooltip"]').length>0)
$('[data-toggle="tooltip"]').tooltip();if($('[data-toggle="popover"]').length>0)
$('[data-toggle="popover"]').popover()
var navbarNavCollapse=$('.hk-nav .navbar-nav  li');var navbarNavAnchor='.hk-nav .navbar-nav  li a';$(document).on("click",navbarNavAnchor,function(e){if($(this).attr('aria-expanded')==="false")
$(this).blur();$(this).parent().siblings().find('.collapse').collapse('hide');$(this).parent().find('.collapse').collapse('hide');});$(document).on('click','.card-close',function(e){var effect=$(this).data('effect');$(this).closest('.card')[effect]();return false;});$(document).on('show.bs.collapse','.accordion .collapse',function(e){$(this).siblings('.card-header').addClass('activestate');});$(document).on('hide.bs.collapse','.accordion .collapse',function(e){$(this).siblings('.card-header').removeClass('activestate');});$(document).on('click','#navbar_toggle_btn',function(e){$wrapper.toggleClass('hk-nav-toggle');$(window).trigger("resize");return false;});$(document).on('click','#hk_nav_backdrop,#hk_nav_close',function(e){$wrapper.removeClass('hk-nav-toggle');return false;});$(document).on('click','#settings_toggle_btn',function(e){$wrapper.toggleClass('hk-settings-toggle');return false;});$(document).on('click','#settings_panel_close',function(e){$wrapper.removeClass('hk-settings-toggle');return false;});$(document).on('click','#nav_light_select',function(e){$nav.removeClass('hk-nav-dark').addClass('hk-nav-light');return false;});$(document).on('click','#nav_dark_select',function(e){$nav.removeClass('hk-nav-light').addClass('hk-nav-dark');return false;});$(document).on('click','#nav_light_select,#nav_dark_select',function(e){$('.hk-nav-select').find('.btn').removeClass('btn-outline-success').addClass('btn-outline-light');$(this).removeClass('btn-outline-light').addClass('btn-outline-success').blur();return false;});$(document).on('click','#navtop_light_select,#navtop_dark_select',function(e){$('.hk-navbar-select').find('.btn').removeClass('btn-outline-success').addClass('btn-outline-light');$(this).removeClass('btn-outline-light').addClass('btn-outline-success').blur();return false;});$(document).on('click','#navtop_light_select',function(e){$navbar.removeClass('navbar-dark').addClass('navbar-light').find('img.brand-img').attr('src','dist/img/logo-light.png');return false;});$(document).on('click','#navtop_dark_select',function(e){$navbar.removeClass('navbar-light').addClass('navbar-dark').find('img.brand-img').attr('src','dist/img/logo-dark.png');return false;});if($('.scroll-nav-switch').length>0){$('.scroll-nav-switch').toggles({drag:true,click:true,text:{on:'',off:''},on:false,animate:250,easing:'swing',checkbox:null,clicker:null,type:'compact'});$('.scroll-nav-switch.toggle').on('toggle',function(e,active){if(active){$wrapper.addClass('scrollable-nav');}else{$wrapper.removeClass('scrollable-nav');}});}
var navBarChk=($('.hk-navbar').hasClass('navbar-dark')),navChk=($('.hk-nav').hasClass('hk-nav-dark'))
$(document).on('click','#reset_settings',function(e){if(navBarChk)
$('#navtop_dark_select').click();else
$('#navtop_light_select').click();if(navChk)
$('#nav_dark_select').click();else
$('#nav_light_select').click();$('.scroll-nav-switch').click();if($('.scroll-nav-switch').find('.toggle-on').hasClass('active'))
$('.scroll-nav-switch').click();return false;});$(document).on('click','#navbar_search_btn',function(e){$('html,body').animate({scrollTop:0},'slow');$(".navbar-search input").focus();$wrapper.addClass('navbar-search-toggle');$(window).trigger("resize");});$(document).on('click','#navbar_search_close',function(e){$wrapper.removeClass('navbar-search-toggle');$(window).trigger("resize");return false;});$('.nicescroll-bar').slimscroll({height:'100%',color:'#d6d9da',disableFadeOut:true,borderRadius:0,size:'6px',enableKeyNavigation:true,opacity:.8});$('.notifications-nicescroll-bar').slimscroll({height:'330px',size:'6px',color:'#d6d9da',disableFadeOut:true,borderRadius:0,enableKeyNavigation:true,opacity:.8});$(".slimScrollDiv").hover(function(){$(this).find('[class*="nicescroll-bar"]').focus();},function(){$(this).find('[class*="nicescroll-bar"]').blur();});var refreshMe='.refresh';$(document).on("click",refreshMe,function(e){var panelToRefresh=$(this).closest('.card').find('.refresh-container');var dataToRefresh=$(this).closest('.card').find('.panel-wrapper');var loadingAnim=panelToRefresh.find('.la-anim-1');panelToRefresh.show();setTimeout(function(){loadingAnim.addClass('la-animate');},100);function started(){}
setTimeout(function(){function completed(){}
panelToRefresh.fadeOut(800);setTimeout(function(){loadingAnim.removeClass('la-animate');},800);},1500);return false;});$(document).on("click",".full-screen",function(e){$(this).parents('.card').toggleClass('fullscreen');$(window).trigger("resize");return false;});};var setHeightWidth=function(){height=window.innerHeight;width=window.innerWidth;$('.full-height').css('height',(height));$('.hk-pg-wrapper').css('min-height',(height));if($vertnaltNav.hasClass('navbar-search-toggle'))
$vertnaltNav.find('.chatapp-users-list,.chat-body').css('height',(height-240));else
$vertnaltNav.find('.chatapp-users-list,.chat-body').css('height',(height-190));if($vertnaltNav.hasClass('navbar-search-toggle')){$vertnaltNav.find('.emailapp-emails-list').css('height',(height-240));$vertnaltNav.find('.email-body').css('height',(height-179));$vertnaltNav.find('.emailapp-sidebar').css('height',(height-107));}
else{$vertnaltNav.find('.emailapp-emails-list').css('height',(height-190));$vertnaltNav.find('.email-body').css('height',(height-129));$vertnaltNav.find('.emailapp-sidebar').css('height',(height-57));}
if($vertnaltNav.hasClass('navbar-search-toggle')){$vertnaltNav.find('.fm-body').css('height',(height-179));$vertnaltNav.find('.fmapp-sidebar').css('height',(height-107));}
else{$vertnaltNav.find('.fm-body').css('height',(height-129));$vertnaltNav.find('.fmapp-sidebar').css('height',(height-57));}
if($vertnaltNav.hasClass('navbar-search-toggle'))
$vertnaltNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-107));else
$vertnaltNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-57));if($vertnaltNav.hasClass('navbar-search-toggle'))
$vertnaltNav.find('.gmap').css('height',(height-107));else
$vertnaltNav.find('.gmap').css('height',(height-57));if(width>1024){if($horizontalNav.hasClass('hk-nav-toggle')&&!($horizontalNav.hasClass('navbar-search-toggle')))
$horizontalNav.find('.chatapp-users-list,.chat-body').css('height',(height-190));else if(!($horizontalNav.hasClass('hk-nav-toggle'))&&$horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.chatapp-users-list,.chat-body').css('height',(height-290));else
$horizontalNav.find('.chatapp-users-list,.chat-body').css('height',(height-240));}
else{if($horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.chatapp-users-list,.chat-body').css('height',(height-240));else
$horizontalNav.find('.chatapp-users-list,.chat-body').css('height',(height-190));}
if(width>1024){if($horizontalNav.hasClass('hk-nav-toggle')&&!($horizontalNav.hasClass('navbar-search-toggle')))
{$horizontalNav.find('.emailapp-emails-list').css('height',(height-190));$horizontalNav.find('.email-body').css('height',(height-129));$horizontalNav.find('.emailapp-sidebar').css('height',(height-57));}
else if(!($horizontalNav.hasClass('hk-nav-toggle'))&&$horizontalNav.hasClass('navbar-search-toggle'))
{$horizontalNav.find('.emailapp-emails-list').css('height',(height-290));$horizontalNav.find('.email-body').css('height',(height-229));$horizontalNav.find('.emailapp-sidebar').css('height',(height-157));}
else
{$horizontalNav.find('.emailapp-emails-list').css('height',(height-240));$horizontalNav.find('.email-body').css('height',(height-179));$horizontalNav.find('.emailapp-sidebar').css('height',(height-107));}}
else{if($horizontalNav.hasClass('navbar-search-toggle'))
{$horizontalNav.find('.emailapp-emails-list').css('height',(height-240));$horizontalNav.find('.email-body').css('height',(height-179));$horizontalNav.find('.emailapp-sidebar').css('height',(height-107));}
else
{$horizontalNav.find('.emailapp-emails-list').css('height',(height-190));$horizontalNav.find('.email-body').css('height',(height-129));$horizontalNav.find('.emailapp-sidebar').css('height',(height-57));}}
if(width>1024){if($horizontalNav.hasClass('hk-nav-toggle')&&!($horizontalNav.hasClass('navbar-search-toggle')))
{$horizontalNav.find('.fm-body').css('height',(height-129));$horizontalNav.find('.fmapp-sidebar').css('height',(height-57));}
else if(!($horizontalNav.hasClass('hk-nav-toggle'))&&$horizontalNav.hasClass('navbar-search-toggle'))
{$horizontalNav.find('.fm-body').css('height',(height-229));$horizontalNav.find('.fmapp-sidebar').css('height',(height-157));}
else
{$horizontalNav.find('.fm-body').css('height',(height-179));$horizontalNav.find('.fmapp-sidebar').css('height',(height-107));}}
else{if($horizontalNav.hasClass('navbar-search-toggle'))
{$horizontalNav.find('.fm-body').css('height',(height-179));$horizontalNav.find('.fmapp-sidebar').css('height',(height-107));}
else
{$horizontalNav.find('.fm-body').css('height',(height-129));$horizontalNav.find('.fmapp-sidebar').css('height',(height-57));}}
if(width>1024){if($horizontalNav.hasClass('hk-nav-toggle')&&!($horizontalNav.hasClass('navbar-search-toggle')))
$horizontalNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-57));else if(!($horizontalNav.hasClass('hk-nav-toggle'))&&$horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-157));else
$horizontalNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-107));}
else{if($horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-107));else
$horizontalNav.find('.calendarapp-sidebar,.calendar-wrap').css('height',(height-57));}
if(width>1024){if($horizontalNav.hasClass('hk-nav-toggle')&&!($horizontalNav.hasClass('navbar-search-toggle')))
$horizontalNav.find('.gmap').css('height',(height-57));else if(!($horizontalNav.hasClass('hk-nav-toggle'))&&$horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.gmap').css('height',(height-157));else
$horizontalNav.find('.gmap').css('height',(height-107));}
else{if($horizontalNav.hasClass('navbar-search-toggle'))
$horizontalNav.find('.gmap').css('height',(height-107));else
$horizontalNav.find('.gmap').css('height',(height-57));}};var chatAppTarget=$('.chatapp-wrap');var chatApp=function(){if(width>1024)
chatAppTarget.removeClass('chatapp-slide');$(document).on("click",".chatapp-wrap .chatapp-users-list a.media",function(e){if(width<=1024){chatAppTarget.addClass('chatapp-slide');}
return false;});$(document).on("click","#back_user_list",function(e){if(width<=1024){chatAppTarget.removeClass('chatapp-slide');}
return false;});$(document).on("keypress","#input_msg_send_chatapp",function(e){if((e.which==13)&&(!$(this).val().length==0)){$('<li class="media sent"><div class="media-body"><div class="msg-box"><div><p>'+$(this).val()+'</p><span class="chat-time">8:00 pm</span><div class="arrow-triangle-wrap"><div class="arrow-triangle left"></div></div></div></div></div></li>').insertAfter(".chatapp-right  ul li.media:last-child");$(this).val('');}else if(e.which==13){alert('Please type asomthing!');}
return;});};var emailAppTarget=$('.emailapp-wrap');var emailApp=function(){if(width>1024)
emailAppTarget.removeClass('emailapp-slide');$(document).on("click",".emailapp-wrap .emailapp-emails-list a.media",function(e){if(width<=1024){emailAppTarget.addClass('emailapp-slide');}
return;});$(document).on("click","#back_email_list",function(e){if(width<=1024){emailAppTarget.removeClass('emailapp-slide');}
return false;});$(document).on("click","#emailapp_sidebar_move",function(e){emailAppTarget.toggleClass('emailapp-sidebar-toggle');return false;});$(document).on("click","#close_emailapp_sidebar",function(e){if(width<=1400){emailAppTarget.removeClass('emailapp-sidebar-toggle');}
return false;});};var fmAppTarget=$('.fmapp-wrap');var fmApp=function(){$(document).on('click','#fm_view_switcher',function(e){$(this).closest('.fmapp-main').toggleClass('fmapp-view-switch');return false;});$(document).on("click","#fmapp_sidebar_move",function(e){fmAppTarget.toggleClass('fmapp-sidebar-toggle');return false;});$(document).on("click","#close_fmapp_sidebar",function(e){if(width<=1400){fmAppTarget.removeClass('fmapp-sidebar-toggle');}
return false;});};var calendarAppTarget=$('.calendarapp-wrap');var calendarApp=function(){$(document).on("click","#calendarapp_sidebar_move",function(e){calendarAppTarget.toggleClass('calendarapp-sidebar-toggle');return false;});$(document).on("click","#close_calendarapp_sidebar",function(e){if(width<=1024){calendarAppTarget.removeClass('calendarapp-sidebar-toggle');}
return false;});};$(window).on("resize",function(){setHeightWidth();});$(window).trigger("resize");