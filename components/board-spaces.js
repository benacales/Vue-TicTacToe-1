Vue.component('board-space', {
    template: `<div class = "box">
    <button class = "theBox" @click = "makemove" type = "button" >
    <i class = "fa" :class = "{'fa-times':value === 1,'fa-circle-thin':value === 2}"></i>

    </button>
    </div>`,
    props: ['value' , 'position'],
    methods: {
        makemove(e) {
            this.$emit("makemove", this.position) // stuff
            console.log (this.position);
        }
    }
})