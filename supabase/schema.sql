-- Run once in the Supabase SQL editor.

create type branch as enum ('bibvewadi','kondhwa');
create type vehicle as enum ('car','bike','suv','commercial');
create type lead_kind as enum ('booking','callback','contact');
create type lead_status as enum ('new','contacted','done','cancelled');

create table if not exists leads (
  id             uuid primary key default gen_random_uuid(),
  kind           lead_kind   not null,
  branch         branch,
  service        text,
  vehicle_type   vehicle,
  vehicle_model  text,
  name           text        not null,
  phone          text        not null,
  preferred_slot text,
  message        text,
  status         lead_status not null default 'new',
  source         text,
  created_at     timestamptz not null default now()
);

create index if not exists leads_status_idx on leads (status, created_at desc);
create index if not exists leads_branch_idx on leads (branch, created_at desc);

-- RLS on: only the server (service-role key) may read/write.
alter table leads enable row level security;
-- No public policies => browser/anon cannot access. Service role bypasses RLS.
