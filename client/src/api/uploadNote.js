export default async function sendNote(content, uploadtime, attachment, noteId) {
    const id = localStorage.getItem('id')
    return await fetch('http://127.0.0.1:3110/api/uploadnote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, content, uploadtime, attachment, noteId })
    }).then(response => {
        if (response.ok) {
            return "Upload thành công!"
        }
        else return "Có lỗi khi upload ùi"
    })

}

