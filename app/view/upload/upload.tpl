<html>
  <head>
    <title>Upload</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="user-info">
      <form method="POST" action="/upload" enctype="multipart/form-data" >
      title: <input name="title" />
      file1: <input name="file1" type="file" />
      <button type="submit">Upload</button>
    </form>
    </div>
  </body>
</html>
