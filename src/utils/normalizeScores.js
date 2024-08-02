const math = require('mathjs');

function normalizeScores(scores) {
    const minScore = math.min(scores);
    const maxScore = math.max(scores);
    return scores.map(score => (score - minScore) / (maxScore - minScore));
}

module.exports = { normalizeScores };
