const express = require('express');
const router = express.Router();
const { getProfiles, getProfile, createProfile } = require('../profiles');

router.get('/', async (req, res) => {
  const profiles = await getProfiles();
  res.json(profiles);
});

router.get('/:id', async (req, res) => {
  const profile = await getProfile(req.params.id);
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
});

router.post('/', async (req, res) => {
  const profileId = await createProfile(req.body);
  res.json({ id: profileId });
});

module.exports = router;