
<template>
    <div v-if='!hidden'>
        <div v-if="msg.animation != null" :class="msg.animation" class="container">
            <img v-if="msg.img != null" :src="msg.img">
            <p v-if="msg.headerText != null">{{ msg.headerText }}</p>
            <p v-if="msg.bodyText != null">{{ msg.bodyText }}</p>
        </div>
    </div>
</template>

<script>
const path = require('path')
import MessageQService from '../services/MessageQService';
export default {
    name: 'stream-events',
    data (){
        return {
            msg: '',
            isPlaying: false,
            hidden: false
        }
    },
    methods: {
        /**
         * Removes currently displayed notification from screen
         */
        clearAll() {
            this.msg = ''
            this.hidden = true
            this.isPlaying = false
        },
        /**
         * Pops a new notification from the queue and
         * manages its lifecycle 
         */
        async showMsg(uri) {
            // Grab new message from the queue after the previos one has 
            // finished playing (isPlaying=false)
            if (!this.isPlaying){
                this.msg = (await MessageQService.getMsg(uri)).data
                // At this point we need to prepare DOM to render new data
                if (this.msg != null){
                    this.isPlaying = true   // message state
                    this.hidden = false     // display top level div  
                }
                // All the messages need to have a displayTime period,
                // during which they will be displayed on screen
                if (this.msg.displayTime != null){
                    setTimeout(()=>{
                        this.clearAll()
                    },this.msg.displayTime*1000)
                }
            }
        }
    },
    created (){
        // Poll for new data for this widget
        setInterval(()=>{
            this.showMsg('/123/update/all-events')
        }, 1000)
    }
}
</script>

<style scoped>

.container{
    text-align: center
}

.bounce-in {
 color:#4794D3;
 -webkit-animation: bounce-in 1s ease 0s infinite normal ;
 animation: bounce-in 1s ease 0s 1 normal ;
}

@-webkit-keyframes bounce-in {
  0%{
	opacity: 0;
	-webkit-transform: scale(.3);
	transform: scale(.3);
  }
  50%{
	opacity: 1;
	-webkit-transform: scale(1.0);
	transform: scale(1.0);
  }
  70%{
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
  }
  100%{
	-webkit-transform: scale(1);
	transform: scale(1);
  }
}

@keyframes bounce-in {
  0%{
	opacity: 0;
	transform: scale(.3);
  }
  50%{
	opacity: 1;
	transform: scale(1.0);
  }
  70%{
	transform: scale(0.9);
  }
  100%{
	transform: scale(1);
  }
}

</style>

