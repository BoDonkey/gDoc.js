window.onload = function() {
    
    // caching public 
    var public = '1cfW7dwJkwJq7rqTsftNy3wjCJR3-yDylc5MRmsc0Yw8';
    
    // layout build
    gDoc(public, 'layout');
    
    // block build
    gDoc({
        public: public,
        sheet: 'links',
        gDoc: 'links',
        columns: ['text', 'link'],
        loop: false,
        html: function() {
            var html = '<a href="{{link}}">{{text}}</a>';
            return html;
        }
    });
    
};