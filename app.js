document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const placeholders = document.querySelectorAll('.placeholder');
    let dragItem;

    items.forEach(item => {
        item.draggable = "true";
        item.addEventListener('dragstart', dragstart)
        item.addEventListener('dragend', dragend)
    });

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('dragover', dragover)
        placeholder.addEventListener('dragenter', dragenter)
        placeholder.addEventListener('dragleave', dragleave)
        placeholder.addEventListener('drop', dragdrop)
    });

    function dragover(event) {
        event.preventDefault();
    };

    function dragenter(event) {
        event.target.classList.add('hovered');
    };

    function dragleave(event) {
        event.target.classList.remove('hovered');
    };

    function dragstart(event) {
        event.target.classList.add('hold');
        setTimeout(() => event.target.classList.add('hide'), 0)
        dragItem = event.target;
    };

    function dragdrop(event) {
        event.target.classList.remove('hovered');
        event.target.append(dragItem);
    };

    function dragend(event) {
        event.target.className = 'item';
    };
})