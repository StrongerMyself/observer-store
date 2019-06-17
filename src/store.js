function Store (initialState) {
    let state = initialState
    let observers = []
    
    this.subscribe = (fn) => {
        observers.push(fn)
        return () => this.unsubscribe(fn)
    }

    this.unsubscribe = (fn) => {
        observers = observers.filter(subscriber => subscriber !== fn)
    }

    const broadcast = (data) => {
        state = data
        observers.forEach(subscriber => subscriber(data))
    }

    Object.defineProperty(this, 'state', {
        get: () => state,
        set: broadcast
    })
}

module.exports = Store
