const { response } = require('express');

const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  const books = await getBooks(req.body.bookName);
  res.json(books);
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BookData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(BookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
