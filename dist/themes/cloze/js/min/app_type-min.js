function updateMain(){for(var e="",t="",l=fields.length,n=0;n<l;n++){var s=fields[n].value;0!==n&&s!==t&&(e+=", "),s!==t&&(e+=s,t=s)}return textbox.value=e,!0}function resizable(e,t){function l(){e.style.width=(e.value.length+1)*n+"em"}var n=Number(t)||7.7,s="keyup,keypress,focus,blur,change,onresize".split(",");for(var i in s)e.addEventListener(s[i],l,!1);l()}function span12(e){var t=document.createElement("span");t.style.position="relative",t.style.display="inline-block",t.style.whiteSpace="nowrap",t.style.maxWidth="100%";var l=.42*(cloze.textContent.length+1)+"em";t.style.minWidth=l,e.style.width=l,cloze.textContent.length>70?(l="100%",t.style.minWidth="99%"):cloze.textContent.length>60?(l="100%",t.style.minWidth="92%"):cloze.textContent.length>50?(l="100%",t.style.minWidth="87%"):cloze.textContent.length>40&&(l="100%",t.style.minWidth="80%"),t.style.webkitTransition="width 0.25s";var n=document.createElement("span");n.style.position="absolute",n.style.left="1px",e.parentNode.insertBefore(t,e),t.appendChild(e),t.appendChild(n),e.setAttribute("onkeydown","this.nextSibling.style.visibility='hidden';this.style.backgroundColor='default';"),n.style.width="100%",n.style.height="1.5em",e.style.backgroundColor="transparent !important",e.style.fontSize="1em",e.style.textAlign="left",e.style.minWidth=l,resizable(e,.62),n.style.overflow="hidden",n.style.textOverflow="ellipsis",e.style.textAlign="left",n.style.textAlign="left",n.innerHTML=cloze.innerHTML.slice(1,-1),n.style.zIndex="-1",n.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" ")}var textbox=document.getElementById("typeans"),clozes=document.getElementsByClassName("cloze"),skips=document.getElementsByClassName("cloze"),textbox=document.getElementById("typeans"),fields=[],cloze=clozes[0],mungeCloze=function(){if(0!==clozes.length)if(null!==textbox){var e=clozes.length>1;if(fields=[],e){for(var t=clozes.length,l=textbox,n=0;n<t;n++)if(null!==(cloze=clozes[n])){var s=l.cloneNode(!0);s.id="typeans"+(n+1),s.setAttribute("class","typeans"),s.onkeyup=updateMain,s.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" ");var i=cloze.parentNode;i.insertBefore(s,cloze),span12(s),fields.push(s)}for(;clozes.length>0;){cloze=clozes[0];var o=cloze.parentNode;o.removeChild(cloze)}l.style.display="none",document.getElementById("typeans1").focus()}else if(null!==cloze){textbox.removeAttribute("class");var r=cloze.parentNode;r.insertBefore(textbox,cloze),r.removeChild(cloze),textbox.style.display="",textbox.setAttribute("class","typeans"),textbox.setAttribute("title"," "+cloze.innerHTML.slice(1,-1)+" "),span12(textbox)}}else for(var a=0;a<skips.length;a++)skips[a].innerHTML=skips[a].innerHTML.slice(1,-1)};mungeCloze();