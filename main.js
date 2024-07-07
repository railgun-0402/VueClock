// Vue.jsで扱うデータを用意する
const mydata = {
    appName: "Hello Vue.js!!!",
    clock: "00:00:00" // 時計文字列
}

// Vue.jsの準備
const app = Vue.createApp({ // Vue"オブジェクトが作られる
    data() {
        return mydata; // Vue.jsで扱うデータを指定する
    },
    created() {
        console.log("created!!"); // Vue.jsが起動した時に実行される
        this.tick();
    },
    methods: {
        // 現在時刻を取得する関数
        tick() {
            console.log("tick!!");

            let date = new Date();
            let h = date.getHours()
            let m = date.getMinutes()
            let s = date.getSeconds()
            
            if (h < 10) h = "0" + h;
            if (m < 10) m = "0" + m;
            if (s < 10) s = "0" + s;
            this.clock = h + ':' + m + ':' + s;
            setTimeout(() => {
                this.tick();
            }, 100);
        },
    },
});
app.mount("#app"); // vue.jsを起動する
