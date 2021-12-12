(function(){
    const tabs = document.querySelectorAll(".js-tabs");
    Array.from(tabs, tab =>{
        const tabslinks = document.querySelectorAll(".js-tab-link");
        let currentActiveTab = tab.querySelector(".js-tab-link.is-active");

        const toggleTab = (toggledTabLink = currentActiveTab) => {
            currentActiveTab = toggledTabLink || currentActiveTab;
            toggledTabLink.classList.toggle("is-active");

            const toggledTabData = toggledTabLink.dataset.index;
            const toggledTabArea = tab.querySelector(`.js-tabarea[data-indexed=${toggledTabData}]`);
            toggledTabArea.classList.toggle("is-active");

        }

        if(!currentActiveTab){
            toggleTab(tabslinks[0]);
        }

        tabslinks.forEach(tabslink => {
            tabslink.addEventListener("click", function(event){
                if(currentActiveTab === this){
                    return;
                }
                if(currentActiveTab){
                    toggleTab();
                }
                toggleTab(this);
            })
        })
    })


})();