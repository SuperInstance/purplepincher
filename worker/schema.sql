-- PurplePincher D1 Schema
-- The Lock: sessions + rounds, tiles for Crab Trap

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  agent TEXT NOT NULL,
  query TEXT NOT NULL,
  strategy TEXT NOT NULL CHECK(strategy IN ('socratic','adversarial','decomposition','perspective','iterative_design','debug','compression','playground')),
  total_rounds INTEGER NOT NULL DEFAULT 3,
  current_round INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','complete','abandoned')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  result TEXT
);

CREATE TABLE IF NOT EXISTS rounds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL REFERENCES sessions(id),
  round_number INTEGER NOT NULL,
  prompt TEXT NOT NULL,
  response TEXT,
  feedback TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  responded_at TEXT,
  UNIQUE(session_id, round_number)
);

CREATE TABLE IF NOT EXISTS tiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  agent TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('examine','reasoning','artifact','communication','move','connect')),
  room TEXT,
  content TEXT NOT NULL,
  word_count INTEGER NOT NULL DEFAULT 0,
  session_id TEXT REFERENCES sessions(id),
  job TEXT,
  embedding_id TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_sessions_agent ON sessions(agent);
CREATE INDEX idx_sessions_status ON sessions(status);
CREATE INDEX idx_rounds_session ON rounds(session_id);
CREATE INDEX idx_tiles_agent ON tiles(agent);
CREATE INDEX idx_tiles_session ON tiles(session_id);
CREATE INDEX idx_tiles_type ON tiles(type);
