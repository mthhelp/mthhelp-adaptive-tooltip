document.addEventListener("DOMContentLoaded", function () {
    const elementsWithTooltipClass = document.querySelectorAll(".hastooltip");

    elementsWithTooltipClass.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            hoverTimeout = setTimeout(() => {
                const tooltipText = element.getAttribute("tool-tip-text");
                const tooltip = document.createElement("div");

                tooltip.classList.add("tooltip");
                element.appendChild(tooltip);

                const elementRect = element.getBoundingClientRect();
                tooltip.textContent = tooltipText;

                tooltip.style.display = "none";
                tooltip.style.display = "block";
                tooltip.style.top = "100%";
                tooltip.style.left = "0";

                const tooltipRect = tooltip.getBoundingClientRect();
                tooltip.classList.add('playtootipshowanim');
                const tooltipRect2 = tooltip.getBoundingClientRect();

                if (elementRect.left < tooltipRect.width) {
                tooltip.style.left = null;
                    tooltip.style.left = '100%';
                }

                if (elementRect.right + tooltipRect.width > window.innerWidth) {
                tooltip.style.left = null;
                    tooltip.style.right = '100%';
                }

                if(elementRect.right + tooltipRect.width > window.innerWidth && elementRect.left < tooltipRect.width){
                    tooltip.style.left = "0%";
                    tooltip.style.right = "0%";
                }

                if (elementRect.top < tooltipRect.height) {
                tooltip.style.left = null;
                    tooltip.style.top = '100%';
                }

                if (elementRect.bottom + tooltipRect.height > window.innerHeight) {
                    tooltip.style.top = null;
                    tooltip.style.bottom = '100%';
                }

                if(elementRect.bottom + tooltipRect.height > window.innerHeight && elementRect.top < tooltipRect.height){
                    tooltip.style.bottom = "0%";
                }

                element.addEventListener("mouseleave", function () {
                   tooltip.classList.add('tooltipremove');
                    setTimeout(function () {
                      tooltip.style.display = "none";
                     element.removeChild(tooltip);
                    }, 300);
                });
                 
            }, 800);

            element.addEventListener("mouseleave", function () {
                  clearTimeout(hoverTimeout);
            });


        });
    });
});


const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = "https://raw.githubusercontent.com/mthhelp/mthhelp-adative-tooltip/main/adative-tooltip.css";
document.head.appendChild(linkElement);