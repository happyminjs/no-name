export default class Search{
    constructor(){
        this.$btn = $('.search-btn');
        this.$input = $('.search-input');
        this.fdv = this.$input.attr('data-fdv');
        this.city = ____json4fe.locallist.listname || 'quanguo',
        this.cate = ____json4fe.catentry.listname || '';
        this.init();
    }
    init(){
        this.$btn.on('click',() => {
            this.go();
        });
        this.$input.on('keyup',(e) => {
            if(e.code == 13){
                this.go();
            }
        })
    }
    go(){
        let value = this.$input.val();
        if (value == this.fdv) {
            value = '';
        }
        if (value == '') {
            window.location.reload();
        }else {
            window.location.href = '//' + this.city + '.58.com/' + this.cate + '/?final=3&searchtype=1&key=' + encodeURIComponent($.trim(value));
        }
    }
}