class Actions{
    // Входные параметры передаются в виде объекта
    // Доступные параметры:
    //  - toggleContainerSelector: css селекстор, определяющий контейнер с переключателями
    //  - toggleItemSelector: css селекстор, определяющий переключатели
    //  - toggleClassesActive: список класcов, задаваемый активным элементам
    //  - toggleMaxActive: максимальное кол-во активных переключателей
    constructor(paramsNew){
        let paramsDefault={
            "toggleContainerSelector": ".actions-toggle-container",
            "toggleItemSelector": ".actions-toggle-item",
            "toggleClassesActive": ['border-indigo-500/100'],
            "toggleClassesDisabled": ['opacity-20'],
            "toggleMaxActive": 3
        };
        this.params = {...paramsDefault, ...paramsNew};
    }

    initToggles(){
        this.toggleContainer = document.querySelector(this.params.toggleContainerSelector);
        this.toggleItems = this.toggleContainer.querySelectorAll(this.params.toggleItemSelector);
        this.activeToggleItems = [];
        this.toggleItems.forEach((item, index) => {
            item.dataset.toggleActive = 'false';
            item.dataset.toggleDisabled = 'false';
            item.dataset.index = index;
            item.addEventListener('click', e => {
                let element = e.currentTarget;
                if (element.dataset.toggleDisabled == 'false'){
                    if (element.dataset.toggleActive == 'true'){
                        this.removeMultipleClasses(element, this.params.toggleClassesActive);
                        element.dataset.toggleActive = 'false';
                        this.activeToggleItems = this.activeToggleItems.filter(item => item != element.dataset.index);
                        if (this.toggleMaxActive != -1 && this.activeToggleItems.length == this.params.toggleMaxActive - 1) {
                            this.toggleItems.forEach(item => {
                                if (item.dataset.toggleDisabled == 'true'){
                                    this.removeMultipleClasses(item, this.params.toggleClassesDisabled);
                                    item.dataset.toggleDisabled = 'false';
                                }
                            })
                        }
                    } else {
                        this.addMultipleClasses(element, this.params.toggleClassesActive);
                        this.activeToggleItems.push(element.dataset.index);
                        element.dataset.toggleActive = 'true';
                        if (this.toggleMaxActive != -1 && this.activeToggleItems.length == this.params.toggleMaxActive) {
                            this.toggleItems.forEach(item => {
                                if (item.dataset.toggleActive == 'false'){
                                    this.addMultipleClasses(item, this.params.toggleClassesDisabled);
                                    item.dataset.toggleDisabled = 'true';
                                }
                            })
                        }
                    }
                };
                // console.clear();
                // console.log(this.activeToggleItems.length);
                // console.log(this.activeToggleItems);
            });
        });
    }

    addMultipleClasses(element, classList){
        classList.forEach(activeClass => {
            element.classList.add(activeClass);
        });
    }

    removeMultipleClasses(element, classList){
        classList.forEach(activeClass => {
            element.classList.remove(activeClass);
        });
    }

    deactivate(){
        this.toggleItems.forEach(item => {
            item.addEventListener('click', {});
            this.removeMultipleClasses(item, this.params.toggleClassesDisabled);
            this.removeMultipleClasses(item, this.params.toggleClassesActive);
            this.addMultipleClasses(item, ['pointer-events-none']);
        })
    }
}