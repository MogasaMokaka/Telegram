const { getConnection } = require('./database');

async function createProfile(profile) {
  const conn = await getConnection();
  try {
    const result = await conn.query(
      'INSERT INTO profiles (name, age, location, interests) VALUES (?, ?, ?, ?)',
      [profile.name, profile.age, profile.location, profile.interests.join(',')]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
}

module.exports = { getProfiles, getProfile, createProfile };