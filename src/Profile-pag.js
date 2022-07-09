export const generateteamPage = (cards) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../ProfilePrompts/cardstyle.css">

</head>
    <div class="page">
        <div class="banner">TEAM</div>

        <div class="cards">${cards}</div>
    </div>

</html>

`
}