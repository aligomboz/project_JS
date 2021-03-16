$(document).ready(function(){
    $('ul.todos').on('click' , '.action-done' , function(e){
        e.preventDefault();
        ($(this).parents('li')).find('.item-title').addClass('text-success text-decoration-line-through');
    })

    $('ul.todos').on('click' , '.action-delete' , function(e){
        e.preventDefault();
        if(window.confirm('are you sure want delete this one ?')){
            ($(this).parents('li')).remove();
        }
    })
   
    $('form').on('submit' , function(e){
        e.preventDefault();
        const text = $(this).find(':text');
        addItemToList({
            'title' : text.val(),
            'completed' : false
        })
        text.val('');
    })
    
})

function addItemToList(item){
    let className = '';
    let actions = '<a href="#" class="action-done text-success mr-2">Mark as Done</a>';
    if(item.completed){
        className = 'text-success text-decoration-line-through';
        actions = '';
    }
    $('ul.todos').prepend(`<li class="list-group-item d-flex" draggable="true">
    <span class="item-title"${className}">${item.title}</span>
    <span class="actions ml-auto">
        ${actions}
        <a href="" class="action-delete text-danger">Delete</a>
    </span>
</li>`)
}