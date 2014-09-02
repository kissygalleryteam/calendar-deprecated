KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('calendar-deprecated', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/calendar-deprecated/2.0.0/']});