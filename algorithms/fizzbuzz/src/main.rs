fn main() {
    let val = 51;
    let fuzz = String::from("Fuzz");
    let buzz = String::from("Buzz");
    let fuzBuz = String::from("Fuzz Buzz");
    let val = val % 3 == 0 ? fuzz : buzz;
    println!("Print: {}",val);
}
