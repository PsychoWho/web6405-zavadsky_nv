class ContactMessage {
    constructor(name, email, message, agreement) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.agreement = agreement;
    }

    printFormatted() {
        console.log("----- Новое сообщение -----");
        console.log(`Имя: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Сообщение: ${this.message}`);
        console.log(`Согласие на обработку данных: ${this.agreement ? "Да" : "Нет"}`);
        console.log("---------------------------");
    }
}

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function () {
    const formData = new FormData(contactForm);

    const contactMessage = new ContactMessage(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
        formData.get("agreement") === "Да"
    );

    contactMessage.printFormatted();
    contactForm.reset();
});