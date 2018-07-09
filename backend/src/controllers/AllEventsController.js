/**
 * Data source for 'stream-events' widget.
 * 
 */

 module.exports = {
     getUpdates (req, res){
        let rand = Math.random()
        if (rand > 0.5){
            let msg = {
                type: 'donation',
                headerText: 'Someone has donated $1000',
                bodyText: 'Enjoy your money',
                img: '/dist/logo.png',
                displayTime: 5,
                animation: 'bounce-in'
            }
            res.send(JSON.stringify(msg))
        }else{
            let msg = {
                type: 'follow',
                headerText: 'Cat has just followed the stream!',
                bodyText: '',
                img: '/dist/logo.png',
                displayTime: 5,
                animation: 'bounce-in'
            }
            res.send(JSON.stringify(msg))
        }        
     }
 }