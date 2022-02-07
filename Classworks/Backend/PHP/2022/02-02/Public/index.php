<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/app.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>

  <div class="container p-5">


    <!-- Modal for creating new book record -->
    <div class="modal fade" tabindex="-1" id="addbook" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new record</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="create" name="create">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Author</span>
                <input type="text" class="form-control" id="author" name="author">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Book title</span>
                <input type="text" class="form-control" id="title" name="title">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Genre</span>
                <input type="text" class="form-control" id="genre" name="genre">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Year</span>
                <input type="text" class="form-control" id="year" name="year">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">ISBN</span>
                <input type="text" class="form-control" id="isbn" name="isbn">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="submit" onclick="addBook()">Add book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End of modal for creating new book record -->

    <!-- Modal for viewing book details -->
    <div class="modal fade" tabindex="-1" id="viewdetails" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">ISBN</th>
                  <td colspan="2" id="isbnView"></td>
                </tr>
                <tr>
                  <th scope="row">Title</th>
                  <td colspan="2" id="titleView"></td>
                </tr>
                <tr>
                  <th scope="row">Author</th>
                  <td colspan="2" id="authorView"></td>
                </tr>
                <tr>
                  <th scope="row">Genre</th>
                  <td colspan="2" id="genreView"></td>
                </tr>
                <tr>
                  <th scope="row">Year</th>
                  <td colspan="2" id="yearView"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- End of modal for viewing book details -->


    <!-- Modal for deleting book -->
    <div class="modal fade" tabindex="-1" id="deletebook" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" id="submitDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of modal for deleting book -->

    <!-- Modal for updating existing book -->
    <div class="modal fade" tabindex="-1" id="updatebook" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update existing book</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="update" name="update">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Author</span>
                <input type="text" class="form-control" id="authorUpdate" name="author">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Book title</span>
                <input type="text" class="form-control" id="titleUpdate" name="title">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Genre</span>
                <input type="text" class="form-control" id="genreUpdate" name="genre">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Year</span>
                <input type="text" class="form-control" id="yearUpdate" name="year">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">ISBN</span>
                <input type="text" class="form-control" id="isbnUpdate" name="isbn">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success" id="submitUpdate">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End of modal for updating existing book -->


    <div class="card">
      <div class="card-header" style="display: flex; justify-content: space-between;">
        <h4>Book details</h4>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addbook">Add New Record</button>
      </div>
      <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="all">
        </tbody>
      </table>
      </div>
      <div class="card-footer text-center">
        <small class="text-center">CodeAcademy - Benas Juskus</small>
      </div>
    </div>
    <script src="js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a3a63cea0d.js" crossorigin="anonymous"></script>
</body>

</html>