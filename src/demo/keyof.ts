(function () {
    const result = {
        a: 3,
        hello: 'world'
    }

    // function get (o: object, name: string) {
    //     return o[name]
    // }

    function get<T extends object, K extends keyof T> (o: T, name: K): T[K] {
        return o[name]
    }


})()