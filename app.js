window.onload = function() {
    
    // caching public 
    var public = '1cfW7dwJkwJq7rqTsftNy3wjCJR3-yDylc5MRmsc0Yw8';
    
    // example 1
    gDoc(public, 'layout');
    
    // example 2
    gDoc({
        public: public,
        sheet: 'links',
        gDoc: 'links',
        data: ['title', 'link'],
        loop: false,
        html: function() {
            var html = '<a href="{{link}}">{{title}}</a>';
            return html;
        }
    });
    
};