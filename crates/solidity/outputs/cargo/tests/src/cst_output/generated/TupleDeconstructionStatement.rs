// This file is generated automatically by infrastructure scripts. Please don't edit by hand.

use crate::cst_output::runner::run;
use anyhow::Result;

#[test]
fn ignored_members() -> Result<()> {
    return run("TupleDeconstructionStatement", "ignored_members");
}

#[test]
fn with_location() -> Result<()> {
    return run("TupleDeconstructionStatement", "with_location");
}

#[test]
fn with_type() -> Result<()> {
    return run("TupleDeconstructionStatement", "with_type");
}

#[test]
fn with_type_and_location() -> Result<()> {
    return run("TupleDeconstructionStatement", "with_type_and_location");
}
