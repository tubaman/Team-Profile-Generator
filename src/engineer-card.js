export const generateEnginerCard = (name, id, email, role, github) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../ProfilePrompts/cardstyle.css">

</head>
<div class="card">
    <div class="top">
        <h1>Robert</h1>
        <h1>Engineer</h1>
    </div>
    <div class="bottom">
        <h3>Name:${name}</h3>
        <h3>Id:${id}</h3>
        <h3>Email:${email}</h3>
        <h3>Github Username:${githubUserName}</h3>
    </div>
</div>

</html>

`
}