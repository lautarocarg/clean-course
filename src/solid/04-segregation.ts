interface Bird {
    eat(): void

}

interface FlyingBird{
    fly(): number;
}

interface RunnibgBird{
    run(): void

}

interface SwimmergBird{
    swim(): void
    
}

class Tucas implements Bird, FlyingBird{

    public fly() {return 100;}
    public eat() {}

}

class Humminbird implements Bird, FlyingBird{

    public fly() {return 200;}
    public eat() {}

}

class Ostrich implements Bird, RunnibgBird {

    public eat() {}
    public run() {}

}

class Penguin implements Bird, SwimmergBird {

    public eat() {}
    public swim() {}


}