class ChatApp {
    constructor() {
        this.messagesScrollWrapper = document.querySelector('[data-apps-chat="messages-scroll-wrapper"]'),
            this.messagesList = document.querySelector('[data-apps-chat="messages-list"]'),
            this.messagesSimplebar = null,
            this.chatForm = document.querySelector("#chat-form"),
            this.chatForm && (this.chatInput = this.chatForm.querySelector("input")),
            this.messagesScrollWrapper && (this.messagesSimplebar = new SimpleBar(this.messagesScrollWrapper))
    }
    getMessageHTML = s => `<li class="chat-group odd" id="odd-1">
                    <img src="assets/images/users/avatar-1.jpg" class="avatar-sm rounded-circle" alt="avatar-1" />

                    <div class="chat-body">
                        <div>
                            <h6 class="d-inline-flex">You.</h6>
                            <h6 class="d-inline-flex text-muted">10:05pm</h6>
                        </div>

                        <div class="chat-message">
                            <p>${s}</p>

                            <div class="chat-actions dropdown">
                                <button class="btn btn-sm btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ti ti-dots-vertical"></i>
                                </button>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#"><i class="ti ti-copy fs-14 align-text-top me-1"></i>
                                        Copy Message</a>
                                    <a class="dropdown-item" href="#"><i class="ti ti-edit-circle fs-14 align-text-top me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href="#" data-dismissible="#odd-1"><i class="ti ti-trash fs-14 align-text-top me-1"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`;
    addNewMessage = s => {
        this.messagesList && (this.messagesList.innerHTML += this.getMessageHTML(s),
            this.scrollToBottom(!0))
    }
        ;
    initForm = () => {
        this.chatForm?.addEventListener("submit", s => {
            s.preventDefault();
            const e = Object.fromEntries(new FormData(s.target).entries());
            e.message && (0 === e.message.trim().length ? this.chatForm.reset() : (this.chatInput.value = " ",
                this.addNewMessage(e.message)))
        }
        )
    }
        ;
    scrollToBottom = (s = !1) => {
        var e;
        this.messagesSimplebar && this.messagesSimplebar.getScrollElement() && (e = this.messagesSimplebar.getScrollElement().scrollHeight,
            s && (this.messagesSimplebar.getScrollElement().style.scrollBehavior = "smooth"),
            this.messagesSimplebar.getScrollElement().scrollTop = e)
    }
        ;
    init = () => {
        this.scrollToBottom(),
            this.initForm()
    }
}
(new ChatApp).init();
